// var, let e const

var x = 10
var y = 15

if(y > 10){
    var x = 5
    console.log(x)
}

console.log(x)


let a = 10
let b = 15

if(y > 10){
    let a = 5
    console.log(a)
}

console.log(a)

for (let i = 0; i < 5; i++){
    console.log(i)
}

function logname(){
    const name = "vinicus"
    console.log(name)
}

const name = "joao"

logname()

console.log(name)

// 2 arrow function

const sum = function sum (a, b) {
    return a + b
}

const arrowSum = (a,b) => {
    return a+b
}

const resumeArrowSum = (a,b) => a + b

console.log(sum(5,5))
console.log(arrowSum(5,5))
console.log(resumeArrowSum(5,5))


// const user = {
//     name: "theo",
//     sayUserName(){
//         var self = this
//         setTimeout(function(){
//             console.log(this)
//             console.log("username" + self.name)
//         }, 500)
//     },
//     sayUserNameArrow() {
//         setInterval(() => {
//             console.log(this)
//             console.log("username: " + this.name)
//         })
//     }
// }

// user.sayUserName()
// user.sayUserNameArrow

// 3 - filter

const arr = [1, 2, 3, 4, 5]

const highNumbers = arr.filter((n) => {
    if(n >= 3 ){
        return n
    }
})

console.log(highNumbers)

const users = [
    {name: 'vinicius', avaliable: true},
    {name: 'lucas', avaliable: false},
    {name: 'jhuan', avaliable: false},
    {name: 'tomas', avaliable: true}
]

const availbleUsers = users.filter((user) => user.avaliable)
console.log(availbleUsers)

// 4 - map
const products = [
    {name: "camisa", price: 10.00, category: "roupa"},
    {name: "chaleira", price: 50.00, category: "eletro"},
    {name: "fogao", price: 400, category: "eletro"},
    {name: "calça", price: 60.00, category: "roupa"},

]

products.map((product) => {
    if (product.category === "roupa"){
        product.onSale = true
    }
})

console.log(products)

// 5 templates literals 
const userName = "vinicus"
const age = 30 

console.log(`nome: ${userName} e sua idade é ${age}`)

// 5 - destructuring

const fruits = ["maca", "laranja", "mamao"]

const [f1, f2, f3] = fruits

console.log(f1)

const productDetails = {
    name: "mouse",
    price: 40.00,
    category: "perifericos",
    color: "cinza"
}

const {name: productName, price, category: producCategory, color} = productDetails
console.log(`o nome do produto é ${productName}, custa R$${price}, da categoria ${producCategory} e é da cor ${color}`)

// 6 - spread operator

const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]

console.log(a3)

const a4 = [0, ...a1, 7]
console.log(a4)

// 7 - class 

class Product {
    constructor (name, price){
        this.name = name
        this.price = price
    }

    productWithDiscount(discount){
        return this.price *((100 - discount) / 100)
    }
}

const shirt = new Product("Camisa gola v", 20)

console.log(shirt.name)
console.log(shirt.productWithDiscount(10))
console.log(shirt.productWithDiscount(50))

// 8 - herança 
class productWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price);
        this.colors = colors;
    }

    showColors() {
        console.log("As cores são");
        this.colors.forEach((color) => {
            console.log(color);
        });
    }
}

const hat = new productWithAttributes("Chapeu", 30.00, ["preto", "azul", "verde"]);

console.log(hat.name);
console.log(hat.productWithDiscount(30));
hat.showColors();
