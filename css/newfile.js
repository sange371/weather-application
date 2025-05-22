function click() {
    alert("Hooray!");
}
let button=document.querySelector("#click-button");
button.addEventListener("click",click);

function submit(event){
    event.preventDefault();
   
    let passWord=document.querySelector("#secret-text");
    let passwordValue=passWord.value;
    alert("Your password is "+ passwordValue);

    let yourEmail=document.querySelector("#email-details");
    let yourName=document.querySelector("#name");
    let emailValue=yourEmail.value;
    let nameValue=yourName.value;
    alert("Your username and email is "+ nameValue +" "+ emailValue);
}
let theButton=document.querySelector("#sign-up-button");
theButton.addEventListener("click",submit);
let button2=document.querySelector("#sign-up-button2");
button2.addEventListener("click",submit);
