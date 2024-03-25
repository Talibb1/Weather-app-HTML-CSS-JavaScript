function weatherInfo() {

    let a = document.querySelector('#cunteryName').value
    console.log(a)
    let currentDate = new Date()


    axios.get(`http://api.weatherapi.com/v1/current.json?key=88161e07cb3b46debec43944231101&q="${a}"`)
        .then(function (response) {
            // handle success
            console.log(response);
            document.querySelector('#location').innerHTML = `${response.data.location.name}, ${response.data.current.wind_dir}`
            document.querySelector('#currentTemp').innerHTML = `${response.data.current.temp_c}°C | ${response.data.current.temp_f} °F`
            document.querySelector('#WeatherImage').src = `https:${response.data.current.condition.icon}`;
            document.querySelector('#winddirection').innerHTML = `Wind : ${response.data.current.wind_mph} m/s  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  pressure : ${response.data.current.pressure_mb} hPa`
            document.querySelector('#humidity').innerHTML = `Humidity : ${response.data.current.humidity} %   &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  cloudiness : ${response.data.current.cloud} %`
            document.querySelector('#Date').innerHTML = `${currentDate.toDateString()}`
            // 1st box

            document.querySelector('#Date1').innerHTML = `${currentDate.toDateString()}`
                 document.querySelector('#Icon').src = `https:${response.data.current.condition.icon}`;
                 document.querySelector('#temperatre1').innerHTML = `${response.data.current.temp_c}°C` 
                 document.querySelector('#sky1').innerHTML = `${response.data.current.condition.text}` 
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}