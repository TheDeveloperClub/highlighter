function init(){
	console.log("Welcome!")
	text.innerHTML = (text.innerText).replace(/./g, (a,o)=>{return "<span class=giraffe id="+o+">"+a+"</span>"})
	text.onmouseup = (x)=>{console.log(1)}
}
