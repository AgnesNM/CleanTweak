let getData = document.getElementById('collate');
getData.addEventListener("click",(event) =>inputData());

function inputData (){
  let business = document.getElementById('brandName').value;
  let published = document.getElementById('pubMonth').value;
  let category = document.getElementById('contentType').value;
  let retrieve = firebase.database().ref('post');
  retrieve.orderByChild("business").equalTo(business).on("value",function(data){//rewrite this function, start here
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
  });
}
