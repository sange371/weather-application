function changeCity(event){
    event.preventDefault();

    let cityName=document.querySelector(".text-input");
    let h1=document.querySelector("h1");

    let cityValue=cityName.value;
    h1.innerHTML=`${cityValue}`;

    let now=new Date();
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day=days[now.getDay()];
    let hours=now.getHours();
    let minutes=now.getMinutes();

    let dayTime=document.querySelector(".time");
    dayTime.innerHTML=`${day} ${hours}:${minutes}`;
}
let button=document.querySelector(".submit-button");
button.addEventListener("click",changeCity);