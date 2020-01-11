//display filtered results via destructuring
const apiKey = 'f4964f60-9be0-11e9-97f8-6d145d4cca4d';

const getUserInput = () => {
	let userInputVal = document.querySelector('#brandName').value;
	return userInputVal;
};

document.querySelector('#collate').addEventListener('click', () => {
	// awaitResponse();
	searchResults(getUserInput());
});

const awaitResponse = () => {
	//const loader = document.querySelector('.spinner-grow').textContent;
	document.querySelector('#loader').style.display = 'block';
};

const notShowLoading = () => {
	const outPutDom = document.querySelector('#loader');
	outPutDom.style.display = 'none';
};





const searchResults = (userInputVal) => {

	const url = new URL("https://app.zenserp.com/api/v2/search?"),
		params = {
			q: userInputVal
		};
	Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
	let data = fetch(`${url}&apikey=${apiKey}`);
	
	data.then(response => {
		//set the display to not show loading
		notShowLoading();
		return response.json();
	}).then(results => {
		//if the results dont have  organic, its an error
		const {	organic } = results;
		if(organic){
			display(organic);
		}else {
			throw Error("Result came back as none")
		}
		
	})
	.catch(err =>{
		console.log(err.stack);		
		document.querySelector('.gif').style.display = 'block';	
		
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
//Error handling