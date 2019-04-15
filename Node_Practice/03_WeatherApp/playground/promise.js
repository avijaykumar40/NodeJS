var addAsync = (a,b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() =>{
			if (typeof a === 'number' && typeof b === 'number') {
				resolve(a+b)
			}else{
				reject('Arguments must be numbers')
			}
		}, 1500)
	})
}
// Single Promise
// addAsync(4,5).then((message) => {
// 	console.log('Result : ', message)
// }, (errorMessage) => {
// 	console.log(errorMessage)
// })

// Chaining Promises
addAsync(4,5).then((message) => {
	console.log('Result : ', message)
	return addAsync(message,33)
}, (errorMessage) => {
	console.log(errorMessage)
}).then((res) =>{
	console.log('Result 2: ', res)
}, (errorMessage) => {
	console.log(errorMessage)
})


// var promise = new Promise((resolve, reject) => {
// 	//resolve('Hey it worked!')
// 	reject('Unable to fufill promise')
// })  

// promise.then((message) => {
// 	console.log('Success : ',message)
// }, (errorMessage) => {
// 	console.log(errorMessage)
// })