window.onload = function() {
	var imgs = document.getElementsByTagName("img");
	var imgHeight = imgs[0].offsetHeight;
	var clientHeight = document.body.clientHeight;
	for(var i = 0; i < imgs.length; i++) {
		imgs[i].style.top = "-" + i * (imgHeight + 50) + "px";
	}
	document.getElementsByClassName("content")[0].style.top = (clientHeight - imgHeight) / 2 - 116 + "px";
};