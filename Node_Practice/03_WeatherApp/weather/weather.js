const request = require('request')

var getWeather = (lat, lon, callback) =>{
	request({
		url: `https://api.darksky.net/forecast/e07a57a52d409fe1c0df6e1e154215f9/${lat},${lon}`,
		json: true,
		}, (error, response, body) => {
			if(error){
			callback('Unable to connect to server')
		}else if(response.statusCode === 400){
			callback('Unable to fetch weather')
		}else if(response.statusCode === 200){
			callback(undefined,{
				latitude : lat,
				longtitude : lon,
				temperature: body.currently.temperature,
				apparentTemperature : body.currently.apparentTemperature,
			})
		}
	})	
}

module.exports.getWeather = getWeather