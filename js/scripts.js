//UI Logic


function collateContent() {
  var brand = {
    "Adtech digital": true,
  	"March 2016":true,
  	image: "Rubber Duck",
  };
  var business = document.getElementById('brandName').value;
  var published = document.getElementById('pubMonth').value;
  var category = document.getElementById('contentType').value;
	 if ((business === "Adtech digital") && (published === "2016-03") && (category === "image")) {
		document.getElementById('output').innerHTML = brand["image"];
	 } else {
    document.getElementById('output'). innerHTML = "Sorry, we did not find content for this period."
	 }
};
//Can I store an image in Javascript? Check this out: https://stackoverflow.com/questions/2395765/store-images-in-javascript-object and read about data islands in Javascript
