//CONSOLE METHODS

console.log("30 Dayf of Javascript");

//Subsititun
let age = 29;
console.log("ben %d yaşındayım", age);

console.log("ben %d yılında %d. ayda doğdum", 2004, 1);

//CSS
console.log("%cDur%c,Naber?", "font-size: 50px; color: red; text-shadow: 0 0 10px white;", "color: blue; font-size: 100px;");


//console.warn()
console.warn("Geliştiricilere Not:");

//console.error()
console.error("Sen naptın la!");
console.error("İşte şimdi bir hata aldın!");

//console.table()
console.table(["Murat", "İlker", "Kamil"]);
console.table({
    isim1: "anıl",
    isim2: "murat",
    isim3: "yakup"
});

//console.time()

console.time("calculate 1m array")
console.log(
    new Array(10e6).fill().map((value, index) => index)
);
console.timeEnd("calculate 1m array");


//console.info() => console.log aynısı

//console.assert() => iddia
/* let a = 5;
let b = 6;

console.assert(b > a, 'a bden büyük değil!'); */


//console.group()

const names = ["Anıl", "Yakup", "Metin", "Hilmi"];

const countries = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"],
    ["Norway", "Oslo"]
];

const user = {
    name: "Anıl",
    surname: "Kadri",
    country: "Finland",
    age: 250
};

console.group("Names");
console.log(names);
console.log("İsimler");


//console.count() => kaç kere çağrıldığını anlatıyor

const test = () => {
    console.count("Test called");
};

test()
test()
test()


//console.clear()