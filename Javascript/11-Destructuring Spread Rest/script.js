//DESTRUCTİON
//Şeklini Bozmak

//const { useInsertionEffect } = require("react");

const numbers = [1, 2, 3];

const [number1, number2] = numbers


console.log(numbers[0]);
console.log(number1);
console.log(numbers[1]);
console.log(number2);
console.log(numbers[2]);


const stack = [
    ["HTML", "CSS", ["JAVASCRIPT", "REACT", "SVELTE"]],
    ["PHP", "MYSQL", "NODEJS"]
];

const [[firstLanguage, secondLanguage, [firstThirdLanguage]], backend] = stack;

console.log(firstLanguage);
console.log(backend);
console.log(firstThirdLanguage);


const [, , num3] = numbers
//console.log(num1);
console.log(num3);


const names = [undefined, "Brook", "David"];

let [
    firstPerson = "Asabeneh",
    secondPerson,
    thirdPerson,
    fourthPerson = "Ababwa"
] = names

console.log(firstPerson);
console.log(secondPerson);
console.log(thirdPerson);
console.log(fourthPerson);


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [sayi1, sayi2, sayi3, ...rest] = nums

console.log(sayi1, sayi2, sayi3);
console.log(rest);

const countries = [
    ["Finland", "Helsinki"], 
    ["Sweeden", "Stockholm"], 
    ["Norway", "Oslo"],
    ["Turkiye", "Ankara"]
];

/* for(const country of countries){
    console.log(`Ülke: ${country[0]} - Başkent: ${country[1]}`);
}; */

for(const [country, capital] of countries){
    console.log(`Ülke: ${country} - Başkent: ${capital}`);
};


const user = {
    name: "Tayfun",
    surname: "Erbilen",
    age: 29,
    pets: {
        cats: ["Mia"],
        dogs: ["Erik"]
    }
}   

const {surname} = user
console.log(surname);

const {name: firstname} = user
console.log(firstname);

const {age: yas, adana = "Adana"} = user
console.log(yas);
console.log(adana);

function multiply(sayilar){
    return sayilar[0] * sayilar[1];
};

const sayilar = [10, 10]

console.log(multiply(sayilar));


function showUserID({name, surname, age, pets: {dogs, cats}}) {
    return `Merhaba, ben ${name} ${surname}, ${age} yaşındayım. Ve ${cats.length} köpeğim ve ${dogs.length} kedim var.`
};

console.log(showUserID(user));


//Spread
//Dağılma, Yayma

const numbers1 = [1, 2, 3];

console.log(numbers1);

const numbers2 = numbers1

console.log(numbers2);

/* numbers2.push(10);
console.log(numbers2);
console.log(numbers1); */

const numbers3 = [...numbers1];
console.log(numbers3);
console.log(numbers1);

const isimler = {
    name: "Ömür",
    surname: "Kuru"
};

const isimler2 = isimler
isimler2.name = "sancak"

console.log(isimler); //atanan isimler de kopyalanıyor

const isimler3 = {
    ...isimler,
    surname: "Gazne"
};

console.log(isimler3);

const sayilar5 = [1, 3, 5];

console.log(
    [0, ...sayilar5, 6]
)

