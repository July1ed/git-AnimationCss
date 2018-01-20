var square = document.querySelector(".square");
function setAnimation(anName){
	square.className = "square";
	square.classList.add(anName);
}

window.onload = function(){
	var btn = document.querySelectorAll(".btnArea>button"),
		len = btn.length,
		btnName;
	for(i=0;i<len;i+=1){
		btn[i].addEventListener("click",function(){
			btnName = this.innerHTML;
			setAnimation(btnName);
		})
	}
}