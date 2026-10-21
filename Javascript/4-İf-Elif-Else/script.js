//If

let num = 3;
if (num > 0) {
  console.log(`${num} is a positive number`);
}

let isRaining = true;
if (isRaining) {
  console.log("Şemsiye al!");
}

let isWinter = false;
if (isWinter) {
  console.log("Kalın montunu giy!"); //bu false olduğu için ekranda gözükmüyor.
}

//If Else

if (isRaining) {
  console.log("Şemsiye al!"); //true olduğu için bu kısım çalıştı.
} else {
  console.log("Şemsiyeye gerek yok, hava güneşli!");
}

if (isWinter) {
  console.log("Kışlık mont al!");
} else {
  console.log("Hava sıcak, monta gerek yok!"); //false olduğu için bu kısım çalıştı.
}

/* let cevap = prompt("7 + 2 işleminin sonucu nedir?");

if(cevap == 9){
    console.log("Doğru cevap!")
} else{
    console.log("Yanlış cevap :(")
} */

//If Else If Else
let yas = Number(prompt("Lütfen yaşınızı girin:", "16"));

if (yas < 13) {
  console.log("Çocuk");
} else if (yas < 18) {
  console.log("Ergen");
} else if (yas < 65) {
  console.log("Yetişkin");
} else {
  console.log("Yaşlı");
}

//Switch
//if else if alternatifi

let havaDurumu = prompt(
  "Lütfen hava durumunu girin:",
  "Rüzgarlı-Yağmurlu-Karlı",
);
switch (havaDurumu) {
  case "Rüzgarlı":
    console.log("Hava rüzgarlı!");
    break;
  case "Yağmurlu":
    console.log("Hava yağmurlu!");
    break;
  case "Karlı":
    console.log("Hava karlı!");
    break;
  default:
    console.log("Hatalı Durum!");
}

//Ternary Operator
x = 14;
console.log(x == 15 ? "X, 15'tir" : "X, 15 değildir!");