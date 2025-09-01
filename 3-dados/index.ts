// 1- arrays

let numbers: number[] = [1, 2, 3]

numbers.push(5)

console.log(numbers[2])

const nomes: string[] = ['Ana', 'Bia', 'Carlos']

// nomes.push(3) // ERRO

// 2 - outra sintaxe para array
const nums: Array<number> = [100, 200, 300]

nums.push(400)


console.log(nums)

// 3 - any NÃO USAR ESSA MERDA

const arr1: any = [1, 'teste', true, [], { nome: 'Vinicius' }]

console.log(arr1)

// 4 - parametros tipados

function soma(a: number ,b: number) {
    console.log(a + b)
}

soma (4,5)

// 5 - retorno de função

function greeting(name: string): string {
    return `Olá ${name}`
}

console.log(greeting('Vinicius'))
// console.log(greeting(123)) // ERRO

// 6 - função anonima
setTimeout(function() {
    const sallary: number = 1000 
    // console.log(parseFloat(sallary)) // ERRO
    // console.log(sallary)
} , 2000)

// 7 - tipos de objetos

function passCoordinates(coord: {x: number, y: number}){
    console.log("X coordinates " + coord.x)
    console.log("Y coordinates " + coord.y)
}

const objCoord = {x: 329, y: 84.2}

passCoordinates(objCoord)

// 8 - propriedades opcionais
function showNumbers(a: number, b: number, c?: number) {
    console.log("A: " + a)
    console.log("B: " + b)
    if (c) {
        console.log("C: " + c)
    }
}

showNumbers(1, 2, 3)
showNumbers(4, 5)

// 9 - validando argumentos opcionais

function advancedGreeting(firstName: string, lastName?: string) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`
    } else {
        return `Olá, ${firstName}, tudo bem?`
    }
}

console.log(advancedGreeting("Vinicius", "Lima"))
console.log(advancedGreeting("test"))

// 10 - union type
function showBalance(balance: string | number) {
    console.log(`O saldo da conta é R$${balance}`)
}

showBalance(100)
showBalance("500")

// 11 - avancando em unio types

function showUserRole(role: boolean | string) {
    if (typeof role === "boolean") {
        return "Usuario não aprovado"
    }

    return `A funcao do usuario é ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))

// 12 - type alias
type ID = number | string

function showId(id: ID) {
    console.log(`O ID é ${id}`)
}

showId(1)
showId("string")

// 13 - interfaces



function passPoint(obj: Point) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const cordObj:Point = {x: 10, y: 20, z: 30}

interface Point {
    x: number 
    y: number
    z?: number
}

passPoint(cordObj)