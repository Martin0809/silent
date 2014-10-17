window.onload = function() {
	var imgs = document.getElementsByClassName("img");
	var imgHeight = imgs[0].offsetHeight;
	for(var i = 0; i < imgs.length; i++) {
		imgs[i].style.top = "-" + i % 5 * imgHeight + "px";
	}
	var clientHeight = document.body.clientHeight;
	var startContent = document.getElementsByClassName("start-content")[0];
	startContent.style.top = (clientHeight - startContent.offsetHeight) / 2 + "px";	
	var contents = document.getElementsByClassName("content");
	for(var i = 0; i < contents.length; i++) {
		contents[i].style.top = (clientHeight - imgHeight - 180) / 2 + "px";
	}
	var wordContents = document.getElementsByClassName("word-content");
	for(var i = 0; i < wordContents.length; i++) {
		wordContents[i].style.top = (clientHeight - wordContents[i].offsetHeight) / 2 + "px";
	}
};

function start() {
	document.getElementById("music").play();
	var link = document.createElement("link");
	link.setAttribute("rel", "stylesheet");  
    link.setAttribute("href", "animation.css");
    document.getElementsByTagName("head")[0].appendChild(link);
}