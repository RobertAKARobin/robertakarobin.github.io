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
