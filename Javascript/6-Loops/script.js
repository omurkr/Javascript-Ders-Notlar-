//Loops

//for
//  for(initialization, condition, increment/decrement)
//Tekrarlayan işlemlerde kullanılır.
for (let i = 0; i <= 5; i++){
    console.log(`${i}, 5'ten küçüktür!`)
}

for (let k = 1; k <= 10; k++){
    console.log(`${k}'nın karesi = ${k * k}`); 
}


//Array ile kullanım
const names = ['Tayfun', 'Mehmet', 'Gökhan', 'Ahmet', 'Oğuzhan', "Süleyman", "Arif", "Selahattin", "Kanuni"];

for (let n = 0; n <= names.length; n++ ){
    console.log(names[n]);
}
//Bu şekilde array her güncellendiğinde hepsini yazdırıyor.

//sum ile toplam değer toplama
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let c = 0; c < numbers.length; c++){
    sum += numbers[c];
}

console.log(sum);


//mevcut array'i baz alarak yeni bir array oluşturmak
let countries = ["turkey", "azerbaijan", "cyprus"];
let newCountries = [];

for(let a = 0; a < countries.length; a++){
    newCountries.push(countries[a].toLocaleUpperCase ());
}
console.log(newCountries);


//while loop
//koşul sağlandığı sürece devam eder
let kosul = 0;
while(kosul < 5){
    console.log(`${kosul}, 5'ten küçüktür!`);
    kosul++ 
}

//dowhile
let z = 0;
do {
    console.log(z);
    z++
} while(z <= 5);


//for of 
for(let name of names){
    console.log("Ad,", name);
}


//break
for(let p = 0; p <= 10; p++){
    if(p == 5){
        console.log(`${p}, örüntünün yarısıdır!`);
        break
    }
    console.log(p);
}


//continue
for(f = 0; f < 10; f++){
    if(f == 5){
        console.log("Bay Geçti");
        continue
    }
    console.log(f);
}