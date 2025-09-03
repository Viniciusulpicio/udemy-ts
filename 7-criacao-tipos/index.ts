// 1 - generics 

function showData<T>(arg: T): string {
    return `O dado é: ${arg}`
}

console.log(showData(5))
console.log(showData('Test'))
console.log(showData(true))
console.log(showData(['a', 'b', 'c']))
console.log(showData({name: 'João', age: 30}))

// 2 - constraints 

function showProductName<T extends {name: string}>(obj: T){
    return `O nome do produto é: ${obj.name}`
}

const myObj = {name: 'Porta', color: 'Branca'}
const otherObj = {name: 'Carro', wheels: 4, engine: 1.0}
// const thirdObj = {price: 19.99, category: 'Roupa'}

console.log(showProductName(myObj))
console.log(showProductName(otherObj))
// console.log(showProductName(thirdObj))

// 3 - genetics interface

interface MyObject<T, U, Q>{
    name: string,
    wheels: T,
    engine: U,
    color: Q
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar: Car = {name: 'Fusca', wheels: 4, engine: 1.0, color: 'Branco'}
const myPen: Pen = {name: 'Bic', wheels: false, engine: false, color: 'Azul'}

console.log(myCar)
console.log(myPen)

// 4 - type parameters

function getSomeKey<T, K extends keyof T>(obj: T, key: K){
    return `A chave ${String(key)} está presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
    hd: '2TB',
    ram: '32GB'
}

console.log(getSomeKey(server, 'ram'))

// 5 - keyof type operator

type Character = {name: string, age: number, hasDriveLIcense: boolean}

type C = keyof Character

function showCharName(obj: Character, name: C): string{
    return `${obj[name]}`
}

const myChar: Character = {
    name: 'Vincius', 
    age: 17, 
    hasDriveLIcense: false}
    
console.log(showCharName(myChar, 'name'))

// 6 - typeof type operator

const userName: string = "Vincius"
const userName2: typeof userName = "Vinicius2"

type x = typeof userName

const userName3: x = "Vinicius3"

// 7 - indexed access types

type Truck = {km: number, kg: number, description: string}
type Km = Truck['km']

const newTruck: Truck = {
    km: 100000,
    kg: 5000,
    description: "Caminhão baú"
}

function showKm(km: Km){
    console.log(`O veículo tem a km de: ${km}`)
}

showKm(newTruck.km)

// 8 - conditional types 

interface A{}
interface B extends A{}
interface Teste {
    showName(): string
}

type myType = B extends A ? number : string

const someVar: myType = 5

type myTypeB = Teste extends {showName(): string} ? string : boolean

// 9 - template literals types

type TesteA = "text"

type CustomType = `some ${TesteA}`

const testing: CustomType = "some text"

type a1 = "text"
type a2 = "name"
type a3 = `${a1 | a2}`