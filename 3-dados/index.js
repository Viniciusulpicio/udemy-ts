// 1- arrays
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
const nomes = ['Ana', 'Bia', 'Carlos'];
// nomes.push(3) // ERRO
// 2 - outra sintaxe para array
const nums = [100, 200, 300];
nums.push(400);
console.log(nums);
// 3 - any NÃO USAR ESSA MERDA
const arr1 = [1, 'teste', true, [], { nome: 'Vinicius' }];
console.log(arr1);
// 4 - parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// 5 - retorno de função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting('Vinicius'));
// console.log(greeting(123)) // ERRO
// 6 - função anonima
setTimeout(function () {
    const sallary = 1000;
    // console.log(parseFloat(sallary)) // ERRO
    // console.log(sallary)
}, 2000);
// 7 - tipos de objetos
function passCoordinates(coord) {
    console.log("X coordinates " + coord.x);
    console.log("Y coordinates " + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
// 8 - propriedades opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
// 9 - validando argumentos opcionais
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }
    else {
        return `Olá, ${firstName}, tudo bem?`;
    }
}
console.log(advancedGreeting("Vinicius", "Lima"));
console.log(advancedGreeting("test"));
// 10 - union type
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
showBalance(100);
showBalance("500");
// 11 - avancando em unio types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuario não aprovado";
    }
    return `A funcao do usuario é ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`O ID é ${id}`);
}
showId(1);
showId("string");
// 13 - interfaces
function passPoint(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const cordObj = { x: 10, y: 20, z: 30 };
passPoint(cordObj);
export {};
//# sourceMappingURL=index.js.map