window.onload = function() {
	var imgs = document.getElementsByClassName("img");
	var imgHeight = imgs[0].offsetHeight;
	for(var i = 0; i < imgs.length; i++) {
		imgs[i].style.top = "-" + i % 5 * imgHeight + "px";
	}
	var clientHeight = document.body.clientHeight;
	var contents = document.getElementsByClassName("content");
	for(var i = 0; i < contents.length; i++) {
		contents[i].style.top = (clientHeight - imgHeight - 180) / 2 + "px";
	}
};