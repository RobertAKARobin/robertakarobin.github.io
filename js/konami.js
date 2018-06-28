const konami = {
	keystring: '',
	event: new Event('konami'),
	sequence: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65].join('.') + '.'
}

document.addEventListener('DOMContentLoaded', ()=>{
	window.addEventListener('keyup', konamiListener)
	window.addEventListener('konami', iNeedAPrompt)
	document.querySelector('[data-prompt]').addEventListener('click', iNoLongerNeedAPrompt)
})

function konamiListener(event){
	konami.keystring += (event.keyCode + '.')
	if(konami.sequence.indexOf(konami.keystring) < 0){
		konami.keystring = ''
	}else if(konami.keystring == konami.sequence){
		konami.keystring = ''
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