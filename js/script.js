document.addEventListener("DOMContentLoaded",()=>{


const form=document.getElementById("messageForm");



if(form){


form.addEventListener("submit",(e)=>{


e.preventDefault();



let data={

name:
document.getElementById("name").value,


email:
document.getElementById("email").value,


message:
document.getElementById("message").value


};



let messages=
JSON.parse(localStorage.getItem("messages")) || [];



messages.push(data);



localStorage.setItem(
"messages",
JSON.stringify(messages)
);



alert(
"Thank you! Your message has been sent successfully."
);



form.reset();


});


}



});