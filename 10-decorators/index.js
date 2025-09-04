var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// 1 - exemplo decorator
function myDecorator() {
    console.log("Iniciando decorator");
    return function (target, propertKey, descriptor) {
        console.log("Executando decorator");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class myClass {
    testing() {
        console.log("terminando execução do método");
    }
}
__decorate([
    myDecorator(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], myClass.prototype, "testing", null);
const myObj = new myClass();
myObj.testing();
// 2 - multiplos decoractors
function a() {
    return function (target, propertKey, descriptor) {
        console.log("Executou a");
    };
}
class MultiplosDecorators {
    testing() {
        console.log("Terminando execução");
    }
}
__decorate([
    a(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MultiplosDecorators.prototype, "testing", null);
const multiple = new MultiplosDecorators();
multiple.testing;
// 3 - class decorator
function classDec(constructor) {
    console.log(constructor);
    if (constructor.name === "User") {
        console.log("Criando usúario!");
    }
}
let User = class User {
    name;
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDec,
    __metadata("design:paramtypes", [String])
], User);
const vinicius = new User("Vinicius");
console.log(vinicius);
// 4 - method decorator
function enumerable(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    name;
    constructor(name) {
        this.name = name;
    }
    showName() {
        return `O nome da máquina é ${this.name}`;
    }
}
__decorate([
    enumerable(false),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Machine.prototype, "showName", null);
const trator = new Machine("Trator");
console.log(trator.showName());
// 5 - acessor decorator
class Monster {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `Nome do monstro ${this.name}`;
    }
    get showAge() {
        return `Idade do monstro ${this.name}`;
    }
}
__decorate([
    enumerable(true),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Monster.prototype, "showName", null);
__decorate([
    enumerable(false),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Monster.prototype, "showAge", null);
const charmander = new Monster("Charmander", 10);
console.log(charmander);
// 6 property decorator
function formatNumber() {
    return function (target, propertKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter
        });
    };
}
class ID {
    id;
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber(),
    __metadata("design:type", Object)
], ID.prototype, "id", void 0);
const newItem = new ID("1");
console.log(newItem);
// 7 exemplo com class decorator
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    id;
    createdAt;
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate,
    __metadata("design:paramtypes", [Number])
], Book);
let Pen = class Pen {
    id;
    createdAt;
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdDate,
    __metadata("design:paramtypes", [Number])
], Pen);
const newBook = new Book(12);
const newPen = new Pen(55);
console.log(newBook);
console.log(newPen);
// 8 - exemplo method Decorator 
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("usuario ja fez post");
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    alreadyPosted = false;
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usuário ${content}`);
    }
}
__decorate([
    checkIfUserPosted(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", void 0)
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post("Meu primeiro post !", newPost.alreadyPosted);
newPost.post("Meu primeiro post !", newPost.alreadyPosted);
// 9 - exemplo property decorator
function Max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} dígitos`);
            }
            else {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        });
    };
}
class Admin {
    username;
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    Max(10),
    __metadata("design:type", String)
], Admin.prototype, "username", void 0);
const user = new Admin("aaaaaaaaaaaaNomeMuitoGrandeee");
let lee = new Admin('leeee');
export {};
//# sourceMappingURL=index.js.map