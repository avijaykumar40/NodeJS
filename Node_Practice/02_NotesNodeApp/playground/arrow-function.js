var square = n => n * n 
console.log("square: ", square(9))

var user = {
	name: 'Vijay',
	sayHello: () => {
		console.log(arguments)
		console.log(`Hello. I am ${this.name} in sayHello`)
	},
	sayHiAlt (){
		console.log(arguments)
		console.log(`Hello. I am ${this.name} in sayHiAlt`)
	}
}

user.sayHello(1)
console.log('=========================')
user.sayHiAlt(1)