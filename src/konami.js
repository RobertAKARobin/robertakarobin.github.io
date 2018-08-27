const konami = {
	event: new Event('konami'),
	input: [],
	sequence: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
}

document.addEventListener('DOMContentLoaded', ()=>{
	window.addEventListener('keyup', konamiListener)
	window.addEventListener('konami', iNeedAPrompt)
	document.querySelector('[data-prompt]').addEventListener('click', iNoLongerNeedAPrompt)
})

function konamiListener(event){
	konami.input.push(event.keyCode)
	let inputString = konami.input.join('.'),
		sequenceString = konami.sequence.join('.')
	if(sequenceString.indexOf(inputString) < 0){
		konami.input = []
	}else if(sequenceString == inputString){
		konami.input = []
		window.dispatchEvent(konami.event)
	}
}

function iNeedAPrompt(event){
	let xhr = new XMLHttpRequest()
	xhr.open('GET', 'https://ineedaprompt.com/api')
	xhr.send()
	xhr.onreadystatechange = ()=>{
		if(xhr.readyState === 4 && xhr.status === 200){
			try{
				iGotAPrompt(JSON.parse(xhr.responseText))
			}catch(e){
				console.dir(xhr)
			}
		}
	}
}

function iGotAPrompt(promptJSON){
	let promptWrapper = document.querySelector('[data-prompt]')
	let promptText = document.querySelector('[data-prompt-text]')
	promptText.textContent = `Prompt #${promptJSON.count}: ${promptJSON.english}`
	promptWrapper.style.display = ''
}

function iNoLongerNeedAPrompt(event){
	if(event.target.tagName !== 'A'){
		let promptWrapper = document.querySelector('[data-prompt]')
		let promptText = document.querySelector('[data-prompt-text]')
		promptWrapper.style.display = 'none'
	}
}
