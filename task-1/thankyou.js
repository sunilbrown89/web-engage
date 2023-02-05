let data = JSON.parse(localStorage.getItem("data"));
let emailDiv = document.getElementById("emailDiv");
let phoneCountryDiv = document.getElementById("phoneCountryDiv");

emailDiv.innerText = "Email address: " + data.email;
phoneCountryDiv.innerText = "Contact number: " + data.countryCode + data.phone + " ”";