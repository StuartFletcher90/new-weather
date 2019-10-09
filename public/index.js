const title = document.getElementById("title")
const button = document.getElementById('button')
const input = document.getElementById('inputLocation')
const summary = document.getElementById('summary')
const temp = document.getElementById('temp')
const loc = document.getElementById('location')

button.addEventListener('click', async ()=>{

    summary.textContent = "loading ..."
    temp.textContent = ""
    let response = await fetch(`/weather?address=${input.value}`)
    let data = await response.json()

    loc.textContent = data.placeData
    summary.textContent = data.weatherData.summary
    temp.textContent = `${Math.floor((data.weatherData.temperature-32)*5/9)}°C`

});





// fetch example
// const getData = async () => {
//     let response = await fetch("a url")
//     let data = await response.json()
//      title.text
// }