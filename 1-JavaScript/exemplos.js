// doc --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript
// não existe número interiro em javascript exceto BigInt, tenha cuidado com algumas operações

console.log(3 / 2);             // 1.5, not 1
console.log(Math.floor(3 / 2)); // 1

// 0.1 + 0.2 == 0.30000000000000004;

// existem algumas coisas estranhas hahahha
console.log(0.1 + 0.2 == 0.30000000000000004);

// função Math matematica
console.log(Math.sin(3.5));

var circumference = 2 * Math.PI * r;

console.log(parseInt('123')); //123

// em navegadores mais antigos o 0 pode representar octal 
console.log(parseInt('010', 10)); //010

console.log(parseInt('010'));  //  8
//primeira string como octal devido ao 0 inicial, e a segunda string como hexadecimal devido ao "0x" inicial. 
// A notação hexadecimal ainda está em vigor
console.log(parseInt('0x10')); // 16

// basta alterar a base para alterar a saída para binario por exemplo
console.log(parseInt('11', 2)); // 3

console.log(+ '42');   // 42
console.log(+ '010');  // 10
console.log(+ '0x10'); // 16


// exemplo NaN (não é um número)
console.log(parseInt('hello', 10)); //NaN

console.log(NaN + 5);

console.log(isNaN(NaN)); // true

console.log(1 / 0); //  Infinity

console.log(-1 / 0); // -Infinity

console.log(isFinite(1 / 0)); // false

console.log(isFinite(-Infinity)); // false

console.log(isFinite(NaN)); // false

console.log('hello'.length); // 5
console.log('hello'.charAt(0)); // "h"
console.log('hello, world'.replace('world', 'mars')); // "hello, mars"
console.log('hello'.toUpperCase()); // "HELLO"

// undefined são variaveis declaradas sem valor atribuído. undefined é uma constante


// Qualquer valor pode ser convertido em booleano de acordo com as seguintes regras:

// 1. false, 0, Cadeias vazias ( ""), NaN, null, e undefined todos se tornam false.
// 2. Todos os outros valores se tornam true.

Boolean('');  // false
Boolean(234); // true

// Variáveis
// existem três maneiras de se declarar uma variável com: let, const e var
// let permite que você declare variáveis ​​em nível de bloco. A variável declarada está disponível no bloco em que está incluída.

let a;
let name = 'Simon';

// myLetVariable is *not* visible out here

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
    // myLetVariable é visivel aqui dentro
}
// myLetVariable  *não* e visivel aqui fora

// const permite que você declare variáveis ​​cujos valores nunca devem ser alterados.
// A variável está disponível no bloco em que é declarada.

const Pi = 3.14; // variable Pi is set
Pi = 1; // will throw an error because you cannot change a constant variable.

// var é a palavra-chave declarativa mais comum. 
// Ele não tem as restrições que as outras duas palavras-chave têm.

var a;
var name = 'Simon';

// myVarVariable *é* visivel aqui fora

for (var myVarVariable = 0; myVarVariable < 5; myVarVariable++) {
    // myVarVariable é visível para toda a função
}

// myVarVariable *é* visivel aqui fora

x += 5;
x = x + 5;

'hello' + ' world'; // "hello world"

'3' + 4 + 5;  // "345"
3 + 4 + '5'; // "75"

123 == '123'; // true
1 == true; // true

123 === '123'; // false
1 === true;    // false

var nome = 'kittens';
if (nome == 'puppies') {
    nome += ' woof';
} else if (nome == 'kittens') {
    nome += ' meow';
} else {
    nome += '!';
}
nome == 'kittens meow';

// while (true) {
// an infinite loop!
// }

var input;
do {
    input = get_input();
} while (inputIsNotValid(input));

for (var i = 0; i < 5; i++) {
    // Will execute 5 times
}

for (let value of array) {
    // do something with value
}

for (let property in object) {
    // do something with object property
}

var name = o && o.getName();

var name = cachedName || (cachedName = getName());

//operador ternario
var allowed = (age > 18) ? 'yes' : 'no';

switch (action) {
    case 'draw':
        drawIt();
        break;
    case 'eat':
        eatIt();
        break;
    default:
        doNothing();
}

switch (a) {
    case 1: // fallthrough
    case 2:
        eatIt();
        break;
    default:
        doNothing();
}

switch (1 + 3) {
    case 2 + 2:
        yay();
        break;
    default:
        neverhappens();
}

var obj = new Object();

var obj = {};

var obj = {
    name: 'Carrot',
    _for: 'Max', // 'for' is a reserved word, use '_for' instead.
    details: {
        color: 'orange',
        size: 12
    }
};


obj.details.color; // orange

obj['details']['size']; // 12

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Define an object
var you = new Person('You', 24);
// We are creating a new person named "You" aged 24.


// dot notation
obj.name = 'Simon';
var name = obj.name;

// bracket notation
obj['name'] = 'Simon';
var name = obj['name'];
// can use a variable to define a key
var user = prompt('what is your key?')
obj[user] = prompt('what is its value?')

obj.for = 'Simon'; // Syntax error, because 'for' is a reserved word
obj['for'] = 'Simon'; // works fine

// Arrays

var a = new Array();
a[0] = 'dog';
a[1] = 'cat';
a[2] = 'hen';
a.length; // 3


var a = ['dog', 'cat', 'hen'];
a.length; // 3

//Lembre-se - o comprimento da matriz é um a mais que o índice mais alto.

// Se você consultar um índice de matriz inexistente, obterá um valor de undefined retorno:

var a = ['dog', 'cat', 'hen'];
a[100] = 'fox';
a.length; // 101

typeof a[90]; // undefined

for (var i = 0; i < a.length; i++) {
    // Do something with a[i]
}

for (const currentValue of a) {
    // Do something with currentValue
}

/*
Você também pode iterar sobre uma matriz usando um for...in loop, 
no entanto, isso não itera sobre os elementos da matriz, 
mas os índices da matriz. 
Além disso, se alguém adicionasse novas propriedades a Array.prototype, 
elas também seriam iteradas por esse loop. 
Portanto, esse tipo de loop não é recomendado para matrizes. */

['dog', 'cat', 'hen'].forEach(function (currentValue, index, array) {
    // Do something with currentValue or array[index]
});

// anexar um item a matriz

a.push(item);

// métodos do Array https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array



/*
Nome do método	    Descrição
      a.toString()	Retorna uma string com o toString()de cada elemento separado por vírgulas.
a.toLocaleString()	Retorna uma string com o toLocaleString()de cada elemento separado por vírgulas.
a.concat(item1[, item2[, ...[, itemN]]])	Retorna uma nova matriz com os itens adicionados a ela.
       a.join(sep)	Converte a matriz em uma string - com valores delimitados pelo sepparâmetro
           a.pop()	Remove e retorna o último item.
a.push(item1, ..., itemN)	Acrescenta itens ao final da matriz.
         a.shift()	Remove e retorna o primeiro item.
a.unshift(item1[, item2[, ...[, itemN]]])	Anexa itens ao início da matriz.
a.slice(start[, end])	Retorna uma submatriz.
   a.sort([cmpfn])	Tem uma função de comparação opcional.
a.splice(start, delcount[, item1[, ...[, itemN]]])	Permite modificar uma matriz excluindo uma seção e substituindo-a por mais itens.
       a.reverse()	Inverte a matriz.
*/

// funções

function add(x, y) {
    var total = x + y;
    return total;
}

add(); // NaN
// You can't perform addition on undefined

add(2, 3, 4); // 5
// added the first two; 4 was ignored

/*
Isso pode parecer um pouco bobo, mas as funções têm acesso a uma 
variável adicional dentro de seu corpo arguments, chamada , que é um 
objeto semelhante a um array que contém todos os valores passados ​​para a função. 
Vamos reescrever a função add para assumir quantos valores quisermos:
*/

function add() {
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i];
    }
    return sum;
}

add(2, 3, 4, 5); // 14

function avg() {
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length;
}

avg(2, 3, 4, 5); // 3.5


function avg(...args) {
    var sum = 0;
    for (let value of args) {
        sum += value;
    }
    return sum / args.length;
}

avg(2, 3, 4, 5); // 3.5
// No código acima, a variável args contém todos os valores que foram passados ​​para a função.

function avgArray(arr) {
    var sum = 0;
    for (var i = 0, j = arr.length; i < j; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

avgArray([2, 3, 4, 5]); // 3.5

avg.apply(null, [2, 3, 4, 5]); // 3.5

var avg = function () {
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length;
};

/*
Isso é semanticamente equivalente ao function avg()formulário. 
É extremamente poderoso, pois permite que você coloque uma definição
de função completa em qualquer lugar onde você normalmente colocaria 
uma expressão. Isso permite todos os tipos de truques inteligentes. 
Esta é uma maneira de "ocultar" algumas variáveis ​​locais - como o escopo do bloco em C:
*/

var a = 1;
var b = 2;

(function () {
    var b = 3;
    a += b;
})();

a; // 4
b; // 2

// funções recursivas

function countChars(elm) {
    if (elm.nodeType == 3) { // TEXT_NODE
        return elm.nodeValue.length;
    }
    var count = 0;
    for (var i = 0, child; child = elm.childNodes[i]; i++) {
        count += countChars(child);
    }
    return count;
}

// como você as chama recursivamente se elas não têm um nome? 
// JavaScript permite nomear expressões de função para isso. 

var charsInBody = (function counter(elm) {
    if (elm.nodeType == 3) { // TEXT_NODE
        return elm.nodeValue.length;
    }
    var count = 0;
    for (var i = 0, child; child = elm.childNodes[i]; i++) {
        count += counter(child);
    }
    return count;
})(document.body);

// Objetos


function makePerson(first, last) {
    return {
        first: first,
        last: last
    };
}

function personFullName(person) {
    return person.first + ' ' + person.last;
}

function personFullNameReversed(person) {
    return person.last + ', ' + person.first;
}

var s = makePerson('Simon', 'Willison');
personFullName(s); // "Simon Willison"
personFullNameReversed(s); // "Willison, Simon"


// isso acima é meio feio hahaha

function makePerson(first, last) {
    return {
        first: first,
        last: last,
        fullName: function () {
            return this.first + ' ' + this.last;
        },
        fullNameReversed: function () {
            return this.last + ', ' + this.first;
        }
    };
}

var s = makePerson('Simon', 'Willison');
s.fullName(); // "Simon Willison"
s.fullNameReversed(); // "Willison, Simon"


var s = makePerson('Simon', 'Willison');
var fullName = s.fullName;
fullName(); // undefined undefined


function Person(first, last) {
    this.first = first;
    this.last = last;
    this.fullName = function () {
        return this.first + ' ' + this.last;
    };
    this.fullNameReversed = function () {
        return this.last + ', ' + this.first;
    };
}
var s = new Person('Simon', 'Willison');

/*
Nós introduzimos outra palavra-chave: new. newestá fortemente relacionado com this. 
Ele cria um novo objeto vazio e, em seguida, chama a função especificada, com thisdefinida 
para esse novo objeto. Observe, porém, que a função especificada com thisnão retorna um valor,
mas apenas modifica o thisobjeto. É newisso que retorna o thisobjeto ao site de chamada. 
As funções projetadas para serem chamadas por newsão chamadas de funções construtoras. 
A prática comum é colocar essas funções em letras maiúsculas como um lembrete para chamá-las new.
*/

function personFullName() {
    return this.first + ' ' + this.last;
}
function personFullNameReversed() {
    return this.last + ', ' + this.first;
}
function Person(first, last) {
    this.first = first;
    this.last = last;
    this.fullName = personFullName;
    this.fullNameReversed = personFullNameReversed;
}

function Person(first, last) {
    this.first = first;
    this.last = last;
}
Person.prototype.fullName = function () {
    return this.first + ' ' + this.last;
};
Person.prototype.fullNameReversed = function () {
    return this.last + ', ' + this.first;
};

/*
Person.prototypeé um objeto compartilhado por todas as instâncias de Person. 
Faz parte de uma cadeia de pesquisa (que tem um nome especial, "cadeia de protótipo"): 
sempre que você tentar acessar uma propriedade Personque não foi definida, o JavaScript 
verificará Person.prototypese essa propriedade existe ali. Como resultado, qualquer coisa 
atribuída a Person.prototypetorna - se disponível para todas as instâncias desse construtor 
por meio do thisobjeto.
*/

var s = new Person('Simon', 'Willison');
s.firstNameCaps(); // TypeError on line 1: s.firstNameCaps is not a function

Person.prototype.firstNameCaps = function () {
    return this.first.toUpperCase();
};
s.firstNameCaps(); // "SIMON"

// adicionando coisas ao protótipo de objetos

var s = 'Simon';
s.reversed(); // TypeError on line 1: s.reversed is not a function

String.prototype.reversed = function () {
    var r = '';
    for (var i = this.length - 1; i >= 0; i--) {
        r += this[i];
    }
    return r;
};

s.reversed(); // nomiS

'This can now be reversed'.reversed(); // desrever eb won nac sihT

// a raiz da cadeia Object.prototype inclui o toString()

var s = new Person('Simon', 'Willison');
s.toString(); // [object Object]

Person.prototype.toString = function () {
    return '<Person: ' + this.fullName() + '>';
}

s.toString(); // "<Person: Simon Willison>"


function trivialNew(constructor, ...args) {
    var o = {}; // Create an object
    constructor.apply(o, args);
    return o;
}

/*
Esta não é uma réplica exata de new, pois não configura a cadeia de protótipos 
(seria difícil ilustrar). Isso não é algo que você usa com frequência, mas é útil 
saber a respeito. Neste trecho, ...args(incluindo as reticências) é chamado de " 
argumentos restantes " - como o nome indica, ele contém o resto dos argumentos.
*/

var bill = trivialNew(Person, 'William', 'Orange');

// equivale a ou quase ...

var bill = new Person('Willian', 'Orange');

// call

function lastNameCaps() {
    return this.last.toUpperCase();
}
var s = new Person('Simon', 'Willison');
lastNameCaps.call(s);
// Is the same as:
s.lastNameCaps = lastNameCaps;
s.lastNameCaps(); // WILLISON

// funções internas

function parentFunc() {
    var a = 1;

    function nestedFunc() {
        var b = 4; // parentFunc can't use this
        return a + b;
    }
    return nestedFunc(); // 5
}

// closures

function makeAdder(a) {
    return function (b) {
        return a + b;
    };
}
var add5 = makeAdder(5);
var add20 = makeAdder(20);
add5(6); // ?
add20(7); // ?

add5(6); // returns 11
add20(7); // returns 27