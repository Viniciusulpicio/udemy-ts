// 1 - tipo de objeto para função com interface
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponível");
    }
    else {
        console.log("O produto não está disponível");
    }
}
const shirt = {
    name: "shirt",
    price: 49.99,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: "tenis", price: 89.99, isAvailable: false });
function showUserDetails(user) {
    console.log(`O email do usuário é ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é ${user.role}`);
    }
}
const u1 = { email: "viniciusulpicio@gmail.com", role: "Admin" };
const u2 = { email: "test@gmail.com" };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const vinicius = {
    name: "Vinicius",
    age: 17
};
const goku = {
    name: "Goku",
    age: 50,
    superPowers: ["Kamehameha", "Genki Dama", "Kaioken"]
};
console.log(vinicius);
console.log(goku);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
// 7 - readonly array 
let myArray = ["Maçã", "Laranja", "Banana"];
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
console.log(myNumberArray);
const mixedArray = [1, "teste", true];
console.log(mixedArray);
// 9 - tuplas com readonly 
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
export {};
//# sourceMappingURL=index.js.map