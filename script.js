const form = {
    headline: document.querySelector("#headlineText"),
    shortDescription: document.querySelector("#shortDescriptionTextArea")
};

let button = document.querySelector("#myButton");
button.addEventListener("click", (e) => {
  e.preventDefault();
  const url = 'https://jsonplaceholder.typicode.com/posts';

  const headlineInput = JSON.stringify(form.headline);
  const shortDescriptionInput = JSON.stringify(form.shortDescription);

  var formdata = new FormData();
  formdata.append("headline", headlineInput);
  formdata.append("shortDes", shortDescriptionInput);

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

   var output;
   var res;
   fetch(url, requestOptions)
  .then(response => response.text())
  .then(result => {
    output = JSON.parse(result);
    res = output["id"];
    console.log(result)
    $("#prediction").html(res);
  })
  .catch(error => console.log('error', error));
});


