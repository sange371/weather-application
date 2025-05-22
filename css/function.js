function search(event){
    event.preventDefault();
    let searchInput=document.querySelector("#search-text-input");

    let h2=document.querySelector("h2");
    if(searchInput.value){
        h2.innerHTML=`Searching for ${searchInput.value}...`;

    }else{
        h2.innerHTML=null;
        alert("Please enter a city");

    }
}
let form=document.querySelector("#search-form");
form.addEventListener("submit",search);