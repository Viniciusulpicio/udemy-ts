// 1 - generics 
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData('Test'));
console.log(showData(true));
console.log(showData(['a', 'b', 'c']));
console.log(showData({ name: 'João', age: 30 }));
// 2 - constraints 
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: 'Porta', color: 'Branca' };
const otherObj = { name: 'Carro', wheels: 4, engine: 1.0 };
// const thirdObj = {price: 19.99, category: 'Roupa'}
console.log(showProductName(myObj));
console.log(showProductName(otherObj));
const myCar = { name: 'Fusca', wheels: 4, engine: 1.0, color: 'Branco' };
const myPen = { name: 'Bic', wheels: false, engine: false, color: 'Azul' };
console.log(myCar);
console.log(myPen);
// 4 - type parameters
function getSomeKey(obj, key) {
    return `A chave ${String(key)} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: 'Vincius',
    age: 17,
    hasDriveLIcense: false
};
console.log(showCharName(myChar, 'name'));
// 6 - typeof type operator
const userName = "Vincius";
const userName2 = "Vinicius2";
const userName3 = "Vinicius3";
const newTruck = {
    km: 100000,
    kg: 5000,
    description: "Caminhão baú"
};
function showKm(km) {
    console.log(`O veículo tem a km de: ${km}`);
}
showKm(newTruck.km);
const someVar = 5;
const testing = "some text";
export {};
//# sourceMappingURL=index.js.map