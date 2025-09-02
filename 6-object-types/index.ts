// 1 - tipo de objeto para função com interface

interface Product {
    name: string
    price: number
    isAvailable: boolean
}

function showProductDetails(product: Product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)
    if (product.isAvailable) {
        console.log("O produto está disponível")
    }else {
        console.log("O produto não está disponível")
    }
}

const shirt: Product = {
    name: "shirt",
    price: 49.99,
    isAvailable: true
}

showProductDetails(shirt)
showProductDetails({ name: "tenis", price: 89.99, isAvailable: false })

// 2 - propriedades opcionais em interfaces

interface User {
    email: string,
    role?: string
}

function showUserDetails(user: User) {
    console.log(`O email do usuário é ${user.email}`)
    if (user.role) {
        console.log(`A função do usuário é ${user.role}`)
    }
}

const u1: User = { email: "viniciusulpicio@gmail.com", role: "Admin"}
const u2: User = { email: "test@gmail.com"}

showUserDetails(u1)
showUserDetails(u2)

// 3 - readonly e index signature

interface Car {
    brand: string
    readonly wheels: number
}

const fusca: Car = {
    brand: "VW",
    wheels: 4
}

console.log(fusca)

// fusca.wheels = 5

// 4 - herança de interfaces

interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x:10
}

coords.y = 15

console.log(coords)

// 5 - extending inerfaces 

interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human {
    superPowers: string[]
}

const vinicius: Human = {
    name : "Vinicius",
    age: 17
}

const goku: SuperHuman = {
    name: "Goku",
    age: 50,
    superPowers: ["Kamehameha", "Genki Dama", "Kaioken"]
}

console.log(vinicius)
console.log(goku)

// 6 - intersection types

interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
}

console.log(arnold)

// 7 - readonly array 

let myArray: ReadonlyArray<string> = ["Maçã", "Laranja", "Banana"]

console.log(myArray)

myArray.forEach((item) => {
    console.log("Fruta: " + item)
})

myArray = myArray.map((item) => {
    return `Fruta: ${item}`
})

console.log(myArray)

// 8 - tuplas 

type fiveNumbers = [number, number, number, number, number]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]

console.log(myNumberArray)

const mixedArray: [number, string, boolean] = [1, "teste", true]

console.log(mixedArray)

// 9 - tuplas com readonly 

function showNumbers(numbers: readonly [number, number]) {
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers([1, 2])