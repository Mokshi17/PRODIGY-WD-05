const container = document.querySelector('.nav-container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-info');
const weatherDetails = document.querySelector('.details');


search.addEventListener('click',()=>{

    const APIKey = "725edc6117f4ff3fb31a38b728e2b491";
    const city = document.querySelector('.search-box input').value;
    
  
    if (city ==='')
        return;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response=> response.json())
        .then(json=>{

            if(json.cod === 200){
            const image = document.querySelector('.weather-icon');
            const temperature = document.querySelector('.temp');
            const cityElement = document.querySelector('.city');
            const humidity = document.querySelector('.humidity');
            const wind = document.querySelector('.wind');

       switch(json.weather[0].main){
        case 'Clear':
            image.src = 'images/clear.png';
            break;
            case 'Rain':
                image.src = 'images/rain.png';
                break;
                case 'Snow':
                    image.src = 'images/snow.png';
                    break;
                    case 'Clouds':
                        image.src = 'images/clouds.png';
                        break;
                        case 'Mist':
                            image.src = 'images/mist.png';
                            break;
                            case 'Drizzle':
                                image.src = 'images/drizzle.png';
                                break;
                                
        default:
            image.src ='images/clouds.png'
            break;
       }
       temperature.innerHTML = `${parseInt(json.main.temp)}°C`;
       cityElement.textContent = json.name;
       humidity.innerHTML = `${json.main.humidity}%`;
       wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;

       container.classList.add('expanded');
  }
else{
    alert("City not found!");
} 
 })
        .catch(error=>console.error(error));
});
