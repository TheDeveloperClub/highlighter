// function_name = (arg1, arg2, ..., argN) => {stuff; return more_stuff}
// function_name(1, 23, "stringy", ..., "sos")

function init(){
	console.log("Welcome!")
	text.innerHTML = (text.innerText).replace(/.|\n/g, (a,o)=>{return "<span class=giraffe id="+o+">"+a+"</span>"})
	text.onmouseup = (x)=>{
		console.log(1)
	}
	//window.getSelection().anchorNode.parentElement.style.background = "#00ff00"
}

function to(start,end,func){
	if(start<end){
		for(i=start;i<end;i++){
			func(i)
		}
	}
}
