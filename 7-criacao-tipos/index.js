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
export {};
// console.log(showProductName(thirdObj))
//# sourceMappingURL=index.js.map