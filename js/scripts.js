//UI Logic
var business = document.getElementById('brandName').value;
var published = document.getElementById('pubMonth').value;
var category = document.getElementById('contentType').value;
var brand = {
  "Adtech digital": true,
	"March 2016":true,
	image: "Rubber Duck",
}

function collateContent() {
	if ((business = "Adtech digital") && (published = "March 2016") && (category = "image")) {
		document.getElementById('output').innerHTML = brand.image;
	} else {

	}
}

//Can I store an image in Javscript? Check this out: https://stackoverflow.com/questions/2395765/store-images-in-javascript-object and read about data islands in Javascript
