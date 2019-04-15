const request = require('request')

const gecodeAddress = (address, callback) =>{
	request({
		url: `https://samples.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(address)}&appid=b6907d289e10d714a6e88b30761fae22`,
		json: true,
		}, (error, response, body) => {
		if(error){
			callback('Unable to connect to server')
			//console.log('Unable to connect to server')
		}else if(body.error === '404'){
			callback('No data found for the query')
			// console.log('No data found for the query')
		}else if(body.cod === 200){
			callback(undefined, {
				address: body.sys.country,
				latitude: body.coord.lat,
				longtitude: body.coord.lon,

			})
			//console.log('Longtitude: ',body.coord.lon)
			//console.log('Latitude: ',body.coord.lat)
			//console.log('Country: ',body.sys.country)
			//console.log(JSON.stringify(response, undefined, 2))
			//console.log(JSON.stringify(body, undefined, 2))
		}
	})
	console.log("Waiting for response from API")
}

module.exports.gecodeAddress = gecodeAddress