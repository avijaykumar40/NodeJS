const yargs = require('yargs')
const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

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
geocode.gecodeAddress(argv.address, (errorMessage, result) => {
	if(errorMessage)
		console.log(errorMessage)
	else{
		console.log(JSON.stringify(result.address))
		
		weather.getWeather(result.latitude,result.longtitude, (errorMessage, weatherResults) => {
			if(errorMessage)
				console.log(errorMessage)
			else
				console.log(JSON.stringify(weatherResults, undefined, 2))
			console.trace()


		})
	}
})

console.log("Waiting for response")






