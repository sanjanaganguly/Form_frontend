const form = {
    headline: document.querySelector("#headlineText"),
    shortDescription: document.querySelector("#shortDescriptionTextArea")
};

let button = document.querySelector("#myButton");
button.addEventListener("click", (e) => {
  e.preventDefault();
  const url = 'https://jsonplaceholder.typicode.com/posts';

  var formdata = new FormData();
  formdata.append("headline", form.headline);
  formdata.append("shortDes", form.shortDescription);

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

   var res;
   fetch(url, requestOptions)
  .then(response => response.text())
  .then(result => {
    res = result
    console.log(result)
    $("#prediction").html(res);
  })
  .catch(error => console.log('error', error));
});


