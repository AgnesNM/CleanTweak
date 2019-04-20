//UI Logic


function collateContent() {
	var brand = {
		"Adtech digital": true,
		"March 2016": true,
		image: "Rubber Duck",
	};
	var business = document.getElementById('brandName').value;
	var published = document.getElementById('pubMonth').value;
	var category = document.getElementById('contentType').value;
	 if ((business === "Adtech digital") && (published === "2016-03") && (category === "image")) {
		document.getElementById('output').innerHTML = brand["image"];
	 } else {
		document.getElementById('output').innerHTML = "Sorry, we did not find content for this period."
	}
	var postData = {
		business: "business",
		published: "published",
		category: "category",
	};
	firebase.database().ref().child('post').push(postData).key;
};
