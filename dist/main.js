(function(){
	'use strict'
	document.addEventListener('DOMContentLoaded', ()=>{
		window.addEventListener('konami', iNeedAPrompt)
		document.querySelector('[data-prompt]').addEventListener('click', iNoLongerNeedAPrompt)
	})

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
		promptWrapper.classList.add('active')
	}

	function iNoLongerNeedAPrompt(event){
		if(event.target.tagName !== 'A'){
			let promptWrapper = document.querySelector('[data-prompt]')
			promptWrapper.classList.remove('active')
		}
	}
})();

(function(){
	'use strict'
	const konami = {
		event: new Event('konami'),
		input: [],
		sequence: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
	}

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

	document.addEventListener('DOMContentLoaded', ()=>{
		window.addEventListener('keyup', konamiListener)
	})
})();

(function(){
	'use strict'

	function setTriggers(triggerAttribute, destinationAttribute){
		const triggerElements = document.querySelectorAll(`[${triggerAttribute}]`)
		for(let element of triggerElements){
			element.addEventListener('click', clickHandler)
		}

		function clickHandler(event){
			const clickedElement = event.target
			const triggerValue = clickedElement.getAttribute(triggerAttribute)
			document.querySelector('body').setAttribute(destinationAttribute, triggerValue)
			for(let element of triggerElements){
				element.classList.remove('active')
			}
			clickedElement.classList.add('active')
		}
	}

	document.addEventListener('DOMContentLoaded', ()=>{
		setTriggers('data-content-trigger', 'data-active-content')
		setTriggers('data-style-trigger', 'data-active-style')

		for(let element of document.querySelectorAll('[data-content-trigger]')){
			element.addEventListener('click', e=>location.hash = element.getAttribute('data-content-trigger'))
		}

		const urlHashValue = (location.hash || '#').substring(1)
		if(urlHashValue){
			const contentTriggerFromHash = document.querySelector(`[data-content-trigger=${urlHashValue}]`)
			if(contentTriggerFromHash){
				contentTriggerFromHash.click()
			}
		}
	})
})();
