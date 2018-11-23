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
	const template = {
		triggerElements: [],
		viewName: '',
	}

	document.addEventListener('DOMContentLoaded', ()=>{
		template.triggerElements = Array.from(document.querySelectorAll('[data-template-triggers] a'))
		template.triggerElements.forEach((element)=>{
			element.addEventListener('click', onTemplateTrigger)
		})

		window.addEventListener('hashchange', onHashChange)
		onHashChange()
	})



	function onTemplateTrigger(event){
		let element = this
		location.hash = template.viewName = element.textContent.toLowerCase()
	}

	function onHashChange(event){
		const allowedViewNames = ['one-pager','extended','geocities']
		template.viewName = (location.hash || '').substring(1)
		if(!allowedViewNames.includes(template.viewName)){
			template.viewName = allowedViewNames[0]
		}
		document.querySelector('body').className = template.viewName
		template.triggerElements.forEach(highlightActiveTemplate)
	}

	function highlightActiveTemplate(element){
		let elementTemplateName = element.textContent.toLowerCase()
		if(elementTemplateName == template.viewName){
			element.setAttribute('data-template-active', 'true')
		}else{
			element.removeAttribute('data-template-active')
		}
	}
})();

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
		promptWrapper.style.display = ''
	}

	function iNoLongerNeedAPrompt(event){
		if(event.target.tagName !== 'A'){
			let promptWrapper = document.querySelector('[data-prompt]')
			promptWrapper.style.display = 'none'
		}
	}
})();
