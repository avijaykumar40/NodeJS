const request = require('request')

var gecodeAddress = (address) =>{
		return new Promise((resolve, reject) =>{
			request({
				url: `https://samples.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(address)}&appid=b6907d289e10d714a6e88b30761fae22`,
				json: true,
			}, (error, response, body) => {
			if(error){
				reject('Unable to connect to server')
			}else if(body.error === '404'){
				reject('No data found for the query')
			}else if(body.cod === 200){
				resolve({
					address: body.sys.country,
					latitude: body.coord.lat,
					longtitude: body.coord.lon,
				})
			}
			})
		})

}

gecodeAddress('Texas').then((location) =>{
	console.log(JSON.stringify(location, undefined,2))
},(errorMessage) => {
	console.log(errorMessage)
})

