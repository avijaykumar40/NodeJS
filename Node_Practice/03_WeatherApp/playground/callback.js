var getUser = (id, callback) => {
	var user = {
		id : id,
		name : 'Vijay',
	}
	setTimeout(() => callback(user), 3000)
}

getUser(201, (userObject) => {
	console.log('User Info: ', userObject)
})