document.addEventListener(
"DOMContentLoaded",
()=>{


console.log(
"Althea Personal Profile Loaded"
);



const footer =
document.getElementById(
"footer-text"
);



if(footer){


footer.innerHTML =

`Contact: angmmd@gmail.com |
© ${new Date().getFullYear()}
Thea's Profile - All Rights Reserved.`;


}



});