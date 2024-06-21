const weatherForm = document.querySelector('#weatherForm');
const cityInput = document.querySelector('#cityInput');
const weatherResult = document.querySelector('#weatherResult');

weatherForm.addEventListener('submit', async(e)=>{
    e.preventDefault();
    const city = cityInput.value.trim();

    if (city === '') return;

    const apiKey = 'Replace with your apikey';
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`
    

    try {
        const response = await fetch(url);
        if(!response.ok) throw new Exrror('City not Found');

        const data = await response.json();

        const weatherHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p><strong>Temparature:<strong>${data.main.temp} &deg;C</p>
            <p><strong>Humidity:<strong>${data.main.humidity} %</p>
            <p><strong>Conditions:<strong>${data.weather[0].description}</p>
        `;
        weatherResult.innerHTML = weatherHTML;
    }catch(error){
        weatherResult.innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
    }
});
