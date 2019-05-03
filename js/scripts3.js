let getData = document.getElementById('collate');
let spinner = document.getElementById('loader');
spinner.style.display="none";
getData.addEventListener("click",(event) =>inputData());

function inputData (){
  spinner.style.display="block";
  let business = document.getElementById('brandName').value;
  let published = document.getElementById('pubMonth').value;
  let category = document.getElementById('contentType').value;
  let retrieve = firebase.database().ref('post');
  retrieve.orderByChild("business").equalTo(business).on("value",function(data){
    console.log(data.val());
    if (data.val()!=null) {
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

    } else {
      content =`<div class="streak">
        <img src="https://firebasestorage.googleapis.com/v0/b/clean-tweak.appspot.com/o/gifs%2F200w.webp?alt=media&token=9ed06448-1b65-415e-ab99-7b39de6b7423" alt="">
        <p>Ooops, we don't seem to have any results for now, sorry!<p>
      </div>`
    }
    document.getElementById('output').innerHTML = content;
    spinner.style.display="none";
  });
}
