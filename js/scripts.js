	document.getElementById('myButton').addEventListener("click", displayHello);
	function displayHello(){
		alert("hello");
	}
	//UI Logic

	var business = document.getElementById('brandName').value;
	var published = document.getElementById('pubMonth').value;
	var category = document.getElementById('contentType').value;
	document.getElementById("collate").addEventListener("click", collateContent);
	function collateContent(){
		retrieveData("fish ltd");
	}
	// retrieveData(business);
	//retrieve data
	function retrieveData(business){
		window.location = "results.html";
		var retrieve = firebase.database().ref('post');
		retrieve.orderByChild("business").equalTo("fish ltd").on("value",function(data){//rewrite this function, start here
			alert("hi");
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
