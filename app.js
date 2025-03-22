const city=document.getElementById("city");
const temp=document.getElementById("temperature");
const weather=document.getElementById("weather");

let i=0;
button.onclick=()=>{
    axios.get('https://www.freetestapi.com/api/v1/weathers')
    .then(function(response){
        document.getElementById("button").textContent="next"
        console.log(response);
        document.getElementById("button").textContent="next"
        city.textContent=response.data[i].city;
        temp.textContent=response.data[i].temperature;
        weather.textContent=response.data[i].weather_description;
        i++;

    })
    .catch(function(error){
        console.log(error);
    });
}