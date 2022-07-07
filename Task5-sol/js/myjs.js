let openPopupBtn = document.querySelector('#openPopup');
let closePopupBtn = document.querySelector('#closePopup');

let popUpDiv = document.querySelector('#popupscreen');
let bodyele =  document.querySelector('body');


openPopupBtn.addEventListener("click", function(){
	popUpDiv.style.zIndex = "5000";
	popUpDiv.style.opacity = "1";
	bodyele.style.overflow = "hidden";
});

closePopupBtn.addEventListener("click", function(){
	
	popUpDiv.style.opacity = "0";
	
	window.setTimeout(function(){
		popUpDiv.style.zIndex = "-1";
		bodyele.style.overflow = "auto";
	},1000);
});

let imgs = document.querySelectorAll('#sec-6 img');
	console.log(imgs);


for(var i=1; i<imgs.length ;i++){
	imgs[i].addEventListener('click', function(){
		var swapv = imgs[0].src;
		imgs[0].src = this.src;
		this.src = swapv;
	});

}


