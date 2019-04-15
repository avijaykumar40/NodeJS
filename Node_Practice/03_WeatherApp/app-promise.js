const yargs = require('yargs')
const axios = require('axios')

const argv = yargs
.options({
	a: {
		demand: true,
		alias: 'address',
		describe: 'Address to fetch weather for',
		string: true,
	}
}).help().alias('help','h').argv
console.log(argv)

var geocodeURL = `https://samples.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(argv.address)}&appid=b6907d289e10d714a6e88b30761fae22`

axios.get(geocodeURL).then((response) =>{
	var lat = response.data.coord.lat
	var lon = response.data.coord.lon
	var weatherURL = `https://api.darksky.net/forecast/e07a57a52d409fe1c0df6e1e154215f9/${lat},${lon}`
	console.log('Country : ',response.data.sys.country)
	return axios.get(weatherURL)
}).then((response) =>{
	var temperature = response.data.currently.temperature
	var apparentTemperature  = response.data.currently.apparentTemperature
	console.log('Temperature : ', temperature)
	console.log('Apparent Temperature : ', apparentTemperature)
}).catch((e) =>{
	console.log(e)
})