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
