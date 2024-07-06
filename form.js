let id= (id) => document.getElementById(id);
let classes = (classes) =>document.getElementsByClassName (classes); 

let usernname = id("username"),
 email = id("Email"),
 password = id("Password"),
 form = id("form"),
 errorMsg = document.getElementsByClassName("error"),
 successIcon  = classes("success-icon");
 failureIcon = classes("failure-icon");


 form.addEventListener("sumbit", (e) => {
    e.preventDefault();
    errorMsg[2].innerHTML = "ghgvjhfhdcfchchc";
 })
 