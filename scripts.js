var email = document.querySelector("input[type=email]");
var form = document.querySelector("form");
var span = document.querySelector("span");

form.addEventListener("submit", function(e){
  if(!email.validity.valid){
    span.innerHTML = "Please provid a valid email";
    email.classList.add("invalid");
    e.preventDefault();
  }
});
