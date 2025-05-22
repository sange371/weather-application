let weather={
    durban:{
        temp:27.8,
        humidity:80
    },
    pretoria:{
        temp:18.3,
        humidity:60
    },
    gqeberha:{
        temp:17.2,
        humidity:90
    },
    bloemfontein:{
        temp:20.7,
        humidity:50
    }
    
};

let city=prompt("Enter a city");
city=city.toLowerCase();

if (weather[city] !==undefined) {
    let temperature=weather[city].temp;
    let humidity=weather[city].humidity;
    let celciustemp=Math.round(temperature);
   
    alert(`it is currently ${celciustemp}°C in ${city} with a humidity of ${humidity}%`);

}else{
    alert("sorry ,we dont know the weather of the city you entered ,try https://www.google.com/search?q=weather+${city}");
};
function isWindy(speed){
    if (speed >5){
        return true;
    }else{
        return false;
    }
}
if (isWindy(6)){
    alert("It is windy");
}else{
    alert("It is not windy");
}