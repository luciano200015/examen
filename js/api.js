const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-17.7297101&lon=-63.1650881&appid=e51b6176450fbac4f3d6649a3a96234e';
let clima=''

fetch(url)
.then(response => response.json())
.then(data =>{
    let element=document.getElementById('elem');
    let temp=Math.trunc(data.main.temp -273.15)
    let max=Math.trunc(data.main.temp_max -273.15)
    let min=Math.trunc(data.main.temp_min -273.15)
    element.innerHTML=`<div class="cont-footer">
                            <div class="divBackground">
                                <h1>${data.name}</h1>
                                <h2>temperatura: ${temp}°C</h2>
                                <h2>max: ${max}</h2>
                                <h2>min: ${min}</h2>
                            </div>
                        </div>`
    console.log(data)
} )

