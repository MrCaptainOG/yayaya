// consts
const logswitch = document.getElementById("logswitch");
const signswitch = document.getElementById("signswitch");
const login = document.getElementById("login");
const signup = document.getElementById("signup");

// main functions
logswitch.onclick = function() {
    login.style.display = "none";
    signup.style.display = "block";
} 

signswitch.onclick = function() {
    login.style.display = "block";
    signup.style.display = "none";
} 