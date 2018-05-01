// function_name = (arg1, arg2, ..., argN) => {stuff; return more_stuff}
// function_name(1, 23, "stringy", ..., "sos")

function init(){
	console.log("Welcome!")
	text.innerHTML = (text.innerText).replace(/./g, (a,o)=>{return "<span class=giraffe id="+o+">"+a+"</span>"})
	text.onmouseup = (x)=>{console.log(1)}
	//window.getSelection().anchorNode.parentElement.style.background = "#00ff00"
}
