//Function

let message = "Merhaba!";

function sayHello(){
    let message = "Hello!"
    return message;
};

let hello = sayHello();
console.log(message);


//Function returning
console.log(hello); //undefined -> geriye bir şey döndürmediğimiz zaman "undefined" değer döner


//Funciton parameter
function multiply(num1, num2){
    return num1 * num2;
};

let total = multiply(5, 2);
console.log("Toplam:", total);


function sumArrayValues(array){
    let counter = 0;
    for(let i = 0; i < array.length; i++){
        counter += array[i];
    };
    return counter;
};

let dizi = [1, 2, 3, 4, 5, 6];
console.log("Toplam:", sumArrayValues(dizi));


//Function unlimited of parameters
function topla(){
    let toplam = 0;
    for(let s = 0; s < arguments.length; s++){
        toplam += arguments[s];
    };
    return toplam;
}

console.log(topla(2, 5, 7, 8, 10));


//Anonymous Function
const sayMerhaba = function(name){
    return `Hello ${name}`;
};

console.log(sayMerhaba("Ömür"));


//Expression Function
const square = function(n){
    return n*n;
};
console.log(square(2));


//self ınvokşng functions
(function(){
    console.log("he yo");
})()

let sayHeYo = (function(name){
    console.log(`Hello ${name}`);
})("Ömür");


//Arrow Function
const hello2 = name => {
    return `hello ${name}`; 
}
//const hello2 = name => `hello ${name}`; //tek satırda yapıyorsan böyle kısaltılabilir!
console.log(hello2("Ahmet"));

const hello3 = (ad, soyad) => `Hello ${ad} ${soyad}`;
console.log(hello3("Halil", "Aslan"));


//
const toplama = (sayi1, ...numbers) => {
    console.log(sayi1);
    console.log(numbers);
}
toplama(2, 4, 5, 6, 7, 8, 9);


//Function default parameters
function hesaplama(say1, say2 = 2){
    return say1 * say2;
};
console.log(hesaplama(10));
console.log(hesaplama(4, 8));