// 1- number

let x: number = 10
console.log(x)

x = 16

console.log(typeof x)

const y: number = 15.92082

console.log(typeof y)

console.log(y)
console.log(y.toPrecision(3))

// 2- string

const firstName:string = "Vinicius"

console.log(firstName.toUpperCase())

let fullName: string 

const lastName: string = "Sulpicio"

fullName = firstName + " " + lastName
console.log(fullName)

// 3- boolean

let a: boolean = false 

console.log(a)
console.log(typeof a)

a = true

console.log(a)

// 4- inference e annotation

const ann: string = "test"

let inf = "Test"

console.log('test')