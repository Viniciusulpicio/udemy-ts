// 1 - void

function whithoutReturn(): void {
    console.log("função sem retorno")
}
whithoutReturn()

// 2 - callback como argumento

function greeting(name: string): string {
    return `Olá ${name}`
}

function preGreeting(f: (name: string) => string, userName: string) {
    console.log("Preparando a função")
    const greet = f(userName)
    console.log(greet)
}

preGreeting(greeting, "Vinicius")
preGreeting(greeting, "João")

// 3 - generic function

// function firstElement<T>(arr: T[]): T {
//     return arr[0]
// }

// console.log(firstElement([1, 2, 3]))
// console.log(firstElement(["a", "b", "c"]))
// console.log(firstElement([true, false, true]))

function mergeObjects<U, T>(obj1: U, obj2: T) {
    return { ...obj1, ...obj2 }
}

const newObject = mergeObjects({ name: "Vinicius" }, { age: 17, job: "Programmer" })

console.log(newObject)

// 4 - constraints 

function biggestNumber<T extends number | string>(a: T, b: T): T {
    let biggest: T

    if (+a > +b) {
        biggest = a
    } else {
        biggest = b
    }

     return biggest
}     

console.log(biggestNumber(5, 3))
console.log(biggestNumber("12", "5"))
// console.log(biggestNumber(5, "3"))

// 5 - especificar tipo de argumento

function mergeArrays<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2)
}

console.log(mergeArrays<number | string>([1, 2, 3], ["4", "5", "6"]))

// 6 - parametros opcionais

function modernGreeting(name: string, greet?: string) {
    if(greet) {
        return `Olá ${greet} ${name}, tudo bem?`
    }

    return `Olá ${name}, tudo bem?`
}

console.log(modernGreeting("Vinicius"))
console.log(modernGreeting("Vinicius", "Sr."))

// 7 - parametros default

function somaDefault(n: number, m = 10): number {
    return n + m 
}

console.log(somaDefault(5))
console.log(somaDefault(5, 5))

// 8 - unknown 

function doSomething(x: unknown) {
    if(Array.isArray(x)) {
        console.log(x[0])
    } else if (typeof x === "number") {
        console.log("X é um número")
    }

}

doSomething([5 ,7 ,4])
doSomething(5)

// 9 - never 

function showErrorMessage(msg: string): never {
    throw new Error(msg)
}
// showErrorMessage("Algum erro aconteceu")

// 10 - rest operator

function sumAll(...n: number[]) {
    return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1, 2, 3, 4, 5))
console.log(sumAll(1324, 4322, 34))

// 11 - destructuring como parametro

function showProductDetails({name, price}: {name: string, price: number}):string {
    return `O nome do produto é ${name} e seu preço é R$${price}`
}

const shirt = {name: "Camisa", price: 49.99}
console.log(showProductDetails(shirt))