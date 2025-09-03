// 1 - import de arquivo
import { importGreet } from "./greet.js"

importGreet();

// 2 - import de variavel

import { x } from "./variable.js"

console.log(x);

// 3 - multiplas importações 

import { a, b, myFunction } from "./multiple.js"

console.log(a, b);
myFunction();

// 4 - alias para import

import {someName as nome} from "./changename.js"

console.log(nome);

// 5 - import all

import * as myNumbers from "./numbers.js"

console.log(myNumbers);
console.log(myNumbers.n1)


// 6 - import types
import type { Human } from "./mytype.js";

class User implements Human {
    name: string;
    age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const pessoa = new User("pessoa", 30 )
console.log(pessoa);