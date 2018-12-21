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
