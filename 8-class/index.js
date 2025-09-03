// 1 - campos em classe
class User {
    name;
    age;
}
const vinicius = new User();
vinicius.name = "Vinicius";
vinicius.age = 17;
console.log(vinicius);
// 2 - constructor
class NewUser {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const vinicius2 = new NewUser("Vinicius", 17);
console.log(vinicius2);
// 3 - readonly
class Car {
    name;
    wheels = 4;
    constructor(name) {
        this.name = name;
    }
}
const fusca = new Car("Fusca");
console.log(fusca);
fusca.name = "Fusca Turbo";
// 4 - herança e super
class Machine {
    name;
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class KillerMachine extends Machine {
    guns;
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destoyer = new KillerMachine("Destroyer", 4);
console.log(destoyer);
// 5 - metodos
class Dwarf {
    name;
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Bom dia do anão");
    }
}
const jimy = new Dwarf("Jimy");
console.log(jimy);
jimy.greeting();
// 6 - this 
class Truck {
    model;
    hp;
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que possui ${this.hp} cavalos de potência`);
    }
}
const volvo = new Truck("Volvo", 400);
const scania = new Truck("Scania", 500);
volvo.showDetails();
scania.showDetails();
// 7 - getters 
class Person {
    name;
    surname;
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + " " + this.surname;
    }
}
const vinicius3 = new Person("Vinicus", "Sulpicio");
console.log(vinicius3.fullName);
// 8 - setters 
class Coords {
    x;
    y;
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso");
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso");
    }
    get getCoords() {
        return `X : ${this.x} e Y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillX = 15;
myCoords.fillY = 10;
console.log(myCoords);
class BlogPost {
    title;
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é: ${this.title}`;
    }
}
const myPost = new BlogPost("Hello World");
console.log(myPost.itemTitle());
class TestingInterface {
    title;
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título é: ${this.title}`;
    }
}
// 10 - override de métodos
class Base {
    someMethod() {
        console.log("Alguma coisa");
    }
}
class Nova extends Base {
}
const myObject = new Nova();
myObject.someMethod();
// 11 - public 
class C {
    x = 10;
}
const cInstance = new C();
console.log(cInstance.x);
// 12 - protected 
class E {
    x = 10;
    protectedMethod() {
        console.log("Este método é protegido");
    }
}
class F extends E {
    showX() {
        console.log("X: " + this.x);
    }
    showProtectedMethod() {
        this.protectedMethod();
    }
}
const fInstance = new F();
fInstance.showX();
fInstance.showProtectedMethod();
// 13 - private 
class PrivateClass {
    name = "Private";
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log("Método privado");
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
const pObj = new PrivateClass();
console.log(pObj.showName());
pObj.showPrivateMethod();
class TestingPrivate extends PrivateClass {
    myMethod() {
        // this.privateMethod()
    }
}
// 14 - static members
class StaticMembers {
    static prop = "Teste static";
    static staticMethod() {
        console.log("Método estático");
    }
}
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
// 15 - generic class 
class Item {
    first;
    second;
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é: ${this.first}`;
    }
}
const newItem = new Item("Caixa", "surpresa");
console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.first);
// 16 - parameters properties
class ParametersProperties {
    name;
    qty;
    price;
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Qtd total: ${this.qty}`;
    }
    get showPrice() {
        return `Price: ${this.price}`;
    }
}
const newShirt = new ParametersProperties("Camisa", 5, 19.99);
console.log(newShirt.name);
console.log(newShirt.showQty);
console.log(newShirt.showPrice);
// 17 - class expressions
const myClass = class {
    name;
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("Vincius");
console.log(pessoa);
// 18 - abstract class
class AbstractClass {
}
class AbstractExample extends AbstractClass {
    name;
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome é: ${this.name}`);
    }
}
const newAbstractObject = new AbstractExample("Abstrato");
newAbstractObject.showName();
// 19 - relações entre classes 
class Dog {
    name;
}
class Cat {
    name;
}
const doguinho = new Cat();
console.log(doguinho);
export {};
//# sourceMappingURL=index.js.map