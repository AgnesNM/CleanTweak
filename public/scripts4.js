// //display results

// const apiKey = 'f4964f60-9be0-11e9-97f8-6d145d4cca4d';

// const getUserInput = () => {
//     let userInputVal = document.querySelector('#brandName').value;  
//     return userInputVal;  
// };

// document.querySelector('#collate').addEventListener('click', () => {        
//     const displResults = searchResults(getUserInput());    
//     document.querySelector('#display').textContent = displResults;    
// });

    
// const searchResults = (userInputVal) => {
//     const url  = new URL("https://app.zenserp.com/api/v2/search?"),
//         params = {q:userInputVal};
//     Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
//     fetch(`${url}&apikey=${apiKey}`).then(response => response.json());     
// }


// //display unfiltered results on console via looping through the json data from the API

// const apiKey = 'f4964f60-9be0-11e9-97f8-6d145d4cca4d';

// const getUserInput = () => {
//     let userInputVal = document.querySelector('#brandName').value;  
//     return userInputVal;  
// };

// document.querySelector('#collate').addEventListener('click', () => {        
//     searchResults(getUserInput());        
        
// });


// const searchResults = (userInputVal) => {
//     const url  = new URL("https://app.zenserp.com/api/v2/search?"),
//         params = {q:userInputVal};
//     Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
//     let result = fetch(`${url}&apikey=${apiKey}`);   
//        result.then(response => {
//         return response.json();
//     }).then(userInputVal => {        
//        let finalResult =  Object.values(userInputVal).forEach(value => {  
//              console.log(value);                              
//         });  
//         // document.querySelector('#display').innerHTML = finalResult;  
//     });
// }    



// //display unfiltered results on console via destructuring json data from the API


const apiKey = 'f4964f60-9be0-11e9-97f8-6d145d4cca4d';

const getUserInput = () => {
    let userInputVal = document.querySelector('#brandName').value;  
    return userInputVal;  
};

document.querySelector('#collate').addEventListener('click', () => {        
    searchResults(getUserInput());        
        
});

const finalData = (organic) => {
    const {organic: [fifthItem]} = finalData;
    const { organic: [position, videos]} = finalData;
    const { organic: [{videos:title, url, parsed}]} = finalData;
    const { organic: [{parsed: source, date, channel}]} = finalData;  
    console.log(fifthItem);
    console.log(position);
    console.log(videos);
    console.log(title,url,parsed);
    console.log(source,date,channel)
    
}
   
const searchResults = (userInputVal) => {
    const url  = new URL("https://app.zenserp.com/api/v2/search?"),
        params = {q:userInputVal};
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    let result = fetch(`${url}&apikey=${apiKey}`);   
    result.then(response => {
     return response.json();
 }).then(finalData => {
     console.log(finalData)
 });
}    