let user = '';
let pass = '';

document.querySelector("#LIbtn").addEventListener("click", function() {
    user = document.querySelector("#user").value;
    pass = document.querySelector("#password").value;

    if(user=="Rodolfo" && pass=="hola"){
        console.log("redirecting"); 
        //export let user;
        window.location.href = "file:///C:/Users/Rod/Desktop/web_dev/SERP/index.html";
    } else {
        alert("invalid credentials");
    }
});

var checkbox = document.querySelector("#rememberMe");
checkbox.addEventListener('change', function() {
  if (this.checked) {
    document.querySelector("#user").value = "Rodolfo";
    document.querySelector("#password").value = "hola";
  } else {
    document.querySelector("#user").value = null;
    document.querySelector("#password").value = null;
  }
});