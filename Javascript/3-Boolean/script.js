//Boolean
let isLightOn = true; //true
let isRaining = false; //false
let truValue = 4 > 3; //true
let falseValue = 3 > 4; //false

//True Value
// pozitif ve negatif tüm sayılar (0 hariç)
// tüm string ifadeler ("" -> boşluk hariç)
// bu değerlerin hepsi true

//Falsy Value
//0
//0n
//undefined
//NaN
//null
//false
//"" -> boşluk
//bu değerlerin hepsi false

//Undefined
//değişken oluşturup değer tanımlamazsak = undefined / fonksşyonda bir değer döndürmüyorsa undefined

//Null
//bir değer yok demek

//Operators
let firstName = "Asabeneh";

let a = 5;
let b = 4;
console.log(a += b); //9
// a += b => a = a + b demek.
console.log(a -= b); //4
// a -= b => a = a - b demek.

//Comparison Operators
// ==, değerin eşit olup olmadığına bakıyor
// ===, hem değerin hem de type'ın eşit olup olmadığına bakıyor
// !=, değerin eşit olmadığına bakıyor
// !==, hem değerin hem de type'ın eşit olmadığına bakıyor
// null == undefined -> true *sadece buna özgü
// null === undefined -> false


//Logical Operators
// && -> ve (true - true = true)
// || -> ya da (false - false = false)
// ! -> değilse (true = false)

console.log(isLightOn && isRaining); // false = True (isLightOn) ve False (isRaining)
console.log(isLightOn || isRaining); // true = True (isLightOn) ya da False (isRaining)
let isLightOff = !isLightOn;
console.log(isLightOff); //false -> başına değil geldi, tersine çevirdi



//Increment Operator

//pre-increment
let count = 0;
console.log(++count); // 1 = önceden arttırırsak konsola artırılmış hali basılır.

//post-increment
console.log(count++); // 1 = değer artmadı (önceki işlemde değeri 1 arttırıldığı için burada 1 gözüküyor ama normalde 2 olması gerek.)
console.log(count); //2 => sonraki kullanımda değeri artar.


//ternary operator
//5 > 4 ? "evet 5 büyüktür 4'ten" : "hayır senin matematiğini seveyim";
//"evet 5 büyüktür 4'ten"

//isRaining ? "Yanına ceket almalısın" : "hava güzel almana gerek yok";
//'hava güzel almana gerek yok'

let result = isLightOff ? "Kapalıysa tasarruf sağlarız" : "Lüzumsuzsa söndürün";
console.log(result); // isLightOff = False değeri sağlıyor. Koşulda da belirttiğim gibi eğer false ise "Lüzumsuzsa söndür" yazıyor.

//operator precendence
//matematikte işlem önceliğine benzer bir işlem önceliği ifadesi vardır.


//Window Method

//alert()
let message = "Merhaba";
//alert(message);

//prompt()
//prompt("Lütfen bir sayı giriniz:", "5");
//İlk değer verilen mesajı, ikinci değer varsayılan bir değer olarak ayarlanıyor.

//let sayi = prompt("Bir sayı girin: ");
//let islem = sayi * 15;
//alert(islem);


//confirm()
//onay kutusu => true - false
//const AGREE = confirm("Silmek istediğine emin misin?");
//alert(AGREE ? "Silme işlemi başarılı" : "Silme işlemi başarısız");


//Date Object

const date = new Date();
console.log(date); //Sun Aug 30 2026 01:32:02 GMT+0300 (Türkiye Standart Saati)
console.log(date.getFullYear()); //2026
console.log(date.getDay()); //0 -> pazar
console.log(date.getMonth()); // 7 -> ağustos

let year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds();
    dayNumber = date.getDay()

//12 Ocak 2021, Pazar, 12:11:00

let months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık"
]

let days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi"
]

let humanReadableDate = `${day} ${months[month]} ${year}, ${days[dayNumber]} ${hour}:${minute}:${second}`;
console.log(humanReadableDate);







