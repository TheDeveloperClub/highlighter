function init(){
	console.log("Welcome!")
	text.innerHTML = (text.innerText).replace(/./g, (a)=>{return "<span class=giraffe>"+a+"</span>"})
}
