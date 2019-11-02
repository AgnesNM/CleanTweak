//GET results from API with query parameter as user input value

const apiKey = 'f4964f60-9be0-11e9-97f8-6d145d4cca4d';

const getUserInput = () => {
    let userInputVal = document.getElementById('brandName').value;  
    return userInputVal;  
};

document.querySelector('#collate').addEventListener('click', () => {       
    searchResults(getUserInput());    
});

    
const searchResults = (userInputVal) => {
    const url  = new URL("https://app.zenserp.com/api/v2/search?"),
        params = {q:userInputVal};
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    fetch(`${url}&apikey=${apiKey}`).then(response => response.json());       
};
