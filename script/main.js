(function(){

var docImages = document.querySelectorAll(".image-holder");
var header = document.querySelector(".heading");
var subHeader = document.querySelector(".main-copy h2");
var docSubText = document.querySelector(".main-copy p");
var appliedClass;

function changeElements() {
	appliedClass = this.id;

	subHeader.classList.remove(appliedClass);
	docSubText.classList.remove(appliedClass);

	header.classList.add(this.id);
	subHeader.classList.add(this.id);



	subHeader.firstChild.nodeValue = dynamicContent[this.id].headline;
	docSubText.firstChild.nodeValue  = dynamicContent[this.id].text;
}

[].forEach.call(docImages, function(images) {
	images.addEventListener('click', changeElements, true);
});



	subHeader.firstChild.nodeValue = dynamicContent['spring'].headline;
	docSubText.firstChild.nodeValue  = dynamicContent['spring'].text;

})();