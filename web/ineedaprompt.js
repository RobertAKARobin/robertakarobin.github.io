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
