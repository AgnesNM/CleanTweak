//displaying a loader as we await results and a gif, if there are no results


let apiKey = `${myAPI.key}`;

const getUserInput = () => {	
		let userInputVal = document.querySelector('#brandName').value;			
		return userInputVal; 		
};

document.querySelector('#collate').addEventListener('click', () => {	
	searchResults(getUserInput());
});

const awaitResponse = () => {
	const loader = document.querySelector('.spinner-grow');
	loader.style.display = 'block';
};

const searchResults = (userInputVal) => {
	const url = new URL("https://app.zenserp.com/api/v2/search?"),
		params = {
			q: userInputVal
		};

	Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
	let data = fetch(`${url}&apikey=${apiKey}`);
	
	
	awaitResponse();

	data.then(response => {			
		return response.json();
	}).then(results => {		
		const {	organic,number_of_results } = results;
		if(number_of_results > 0){
			display(organic);
		}
		else{
			let err =  new Error('the search didnt find any results');
			err.name = "no results";
			throw err;
		}		
								
	})
	.catch(err =>{		
		if (err.name === "no results"){		
			document.querySelector('.gif').style.display = 'block';
			document.querySelector('.spinner-grow').style.display = 'none';	
		}
		console.log(err.stack);				
	});			
}

const display = (results) => {
	let cardsArray = results.map((result) => {
		//check if it has title,description,url
		if (result.title && result.url && result.description) {
			const {
				title,
				url,
				description
			} = result;
			const card = `
		          <div class="col-md-3 d-flex pb-4">
                    <div class="card text-center d-flex">
                        <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">
                            ${description}
                        </p>
                        <button type="button" name="button">
                            <a href= "${url}">Visit site</a>
                        </button>
                        </div>
                    </div> 
                </div>                           
                 `
			return card;
		} else {}
	}).join('\n');
	document.querySelector('#display').innerHTML = cardsArray;
};