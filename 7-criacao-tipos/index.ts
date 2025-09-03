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

// 4 - 