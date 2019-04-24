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
	//  if ((business === "Adtech digital") && (published === "2016-03") && (category === "image")) {
	// 	document.getElementById('output').innerHTML = brand["image"];
	//  } else {
	// 	document.getElementById('output').innerHTML = "Sorry, we did not find content for this period."
	// }
	var postData = {
		business: business,
		published:published,
		category: category,
	};
	window.location = "results.html";
};
retrieveData("fish ltd");
//retrieve data
function retrieveData(business){
	var retrieve = firebase.database().ref('post');
	retrieve.orderByChild("business").equalTo(business).on("value",function(data){
		console.log(data.val());
		if (data.exists()) {
			var content = "";
			data.forEach(function(data){
				var validate = data.val();
				content += `
						<div class="card">
							<div class="card-body bg-danger text-center">
								<p>${validate.business}</p>
									<img class="displayImg" src="${validate.image}" alt="">
										<p>${validate.published}</p>
							</div>
						</div>
				`;
			});
			document.getElementById('output').innerHTML = content;
		} else {

		}
	},function (error){
		console.log(error.code);
	});
}
