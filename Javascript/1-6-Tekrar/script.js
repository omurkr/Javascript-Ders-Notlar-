//console.log()
console.log("Merhaba"); //Console'a yazı yazmamızı sağlar.
console.log(25);

//console.log ile birden fazla şey yazdırma
console.log("Merhabalar", ",", "Bugün", 1, "-", 5, "arasındaki", "konuları", "tekar", "ediyoruz", ".")

//typeof -> bir değerin veri tipini öğrenmeye yarar.
console.log(typeof "Alsancak"); //string
console.log(typeof 14); //number
console.log(typeof true); //boolean
console.log(typeof null); //object -> javascript'in tarihsel bir tuhaflığıdır
console.log(typeof undefined); //undefined

//-------------------------------------------------------------------------------------------------

//Değişkenler
//let
let youtubeChannelName = "Alsancak";
youtubeChannelName = "No'One" //değişkenin değeri değiştirilebilir

//const
const PI = 3.14;
const GRAVITY = 9.81; //değişkenin değeri değişmez

//örnek
const MYNAME = "Alsancak";
let myAge = 22;
const FEMALE_BOY = true;
let myJobs = null;
let marriedYet = undefined;

//null - undefined?
//null, değişkenin oluşturulup bilinçli olarak değer atanmadığı durumdur
//undefined, henüz değerin atanmadığı durumdur.


//birden fazla değer atama
let name = "Alsancak",
    surname = "Songazne",
    age = 24,
    languageTr = true;

//--------------------------------------------------------------------------------

//1. Gün Egzersizleri
//Yorumlar kodu okunabilir hale getirmeye yardımcı olur.
//30GundeJavascript eğitimine hoş geldiniz.
/*Yorumlar kodu
okunabilir
yeniden kullanımı kolay ve
bilgilendirivi bir hal
e getirir. */

let ad, soyad, yas, erkek;
ad = "Ömür",
soyad = "Kuru",
yas = 14,
okul = true;

console.log(ad);
console.log(soyad);
console.log(yas);
console.log(okul);

console.log(ad, soyad, yas, okul);

let benimYasim = 25;
let seninYasin = 30;

console.log("Ben", benimYasim, "Yaşındayım");
console.log("Sen", seninYasin, "Yaşındasın");

//-------------------------------------------------------------------------------------------

//Gün 2

//Veri Türleri
//Primitive - İlkel
//Number - string - boolean - null - undefined - symbol - bigint

//Non Primitive - İlkel Olmayan
//Object - Array - Function


//Primitive
//Burada değişkenin değeri değil, değerin kendisinin değiştirilememesidir.
//Yani:
let word = "Javascript";
//dedikten sonra,
word[0] = "Y";
//dersen word değişmez. Çünkü string içerisindeki karakterlere doğrudan erişemez.
//Ama,
word = "Python";
//Bunu yapabilirsin:
console.log(word);

//Karşılaştırma
let numOne = 3;
let numTwo = 3;
console.log(numOne == numTwo); //True -> çünkü ikisinin de değeri 3.

let js = "Javascript";
let pyt =  "Python";
console.log(js == pyt); //False -> değerleri farklı.

let kucukharf = "elma";
let buyukharf = "Elma";
console.log(kucukharf == buyukharf); //False -> Büyük-küçük harf uyumu var.

//Non-Primitive Farkı?
let nums = [1, 2, 3]; //ayrı dizi
let numbers = [1, 2, 3]; //başka bir dizi
console.log(nums == numbers); //False -> Çünkü javascript iki farklı array olduğunu görüyor.
//fakat,
numbers = nums;
console.log(nums == numbers); //true -> İki değişkende aynı array'i gösteriyor.
//dolayısıyla,
numbers[0] = 10;
console.log(numbers); //[10, 2, 3] olur, çünkü bir array ifade.

//-----------------------------------------------------------------------------------------

//Numbers
let x = 5; //number
let y = 5.21; //number
//pythondaki gibi float-int ayrımı yok

//Math()

//Math.PI()
console.log(Math.PI); //Pi değerini verir

//Math.Round()
console.log(Math.round(3.14)); //En yakın tam sayıya yuvarlar.
//0.5'in altı ve üstü olarak yuvarlar.
console.log(Math.round(3.49)); //3
console.log(Math.round(3.50)); //4
console.log(Math.round(3.51)); //4

//Math.floor()
//aşağıya yuvarlar
console.log(Math.floor(3.9)); //3
console.log(Math.floor(3.1)); //3

//Math.ceil()
//yukarı yuvarlar
console.log(Math.ceil(3.2)); //4
console.log(Math.ceil(3.9)); //4

//Math.min()
//En küçüğü 
console.log(Math.min(12, 4, -5, 2, 0)); //-5

//Math.max()
//En büyüğü
console.log(Math.max(-4, 0, 123, 4, 22, 5)); //123

//Math.random()
//0 dahil, 1 hariç rastgele bir sayı üretir.
//1 üretmez.
console.log(Math.random()) //0.6331248748799263
//Mantığı; 0 <= sayi < 1 şeklindedir.

let rastgeleSayi = Math.random();
console.log(rastgeleSayi);

rastgeleSayi = Math.random() * 11;
console.log(rastgeleSayi);
//Bunun da mantığı, 0 <= sayi < 11
//Yani hangi değer aralığında sayı üretmesini istediğimiz zaman bir aralık belirliyoruz.

//Püf Nokta
let max = 10; //max değer
let min = 5; //min değer
let randomSayi = Math.floor(Math.random() * (max - min + 1)) + min;
//Math.random() * 6 (istenen sayının bir üstü) ve onu da floor ile bir alt tam sayıya yuvarlıyor.
console.log(randomSayi);
//Buradaki mantıkta aynı, minimum ile maksimum değer aralığında rastgele bir sayı üretir.

//--------------------------------------------------------------------------------------------------------------


//String
//Stringler, "" / '' / `` şeklinde oluşturulur. `` şeklinde olan tırnaklar, template literal olarak kullanılır.

//Stringlerde birleştirme
let firstName = "Ömürhan";
let secondName = "Kuru";
let myYas = 23;
let myProfile = `Benim adım ${firstName} ${secondName}. Ben ${myYas} yaşındayım..`;
console.log(myProfile);

//template literal
let a = 19;
let b = 22;
console.log(`Toplam: ${a + b}`); //41
console.log(`Sonu.: ${a > b}`); //false

//\n -> yeni satır
console.log("Merhaba\nDünya!");

//\t -> Tab
console.log("Ad\tSoyad");

// \\ -> gerçek \ karakterini yazdırır
console.log("C:\\users\\Omurhan");

// \' -> tek tırnak karakterini backtick içerisinde kullanmaya yarar
console.log("Yazar \'Nuri Yaşaroğlu\'");

//lenght()
//Kaç karakter olduğunu gösterir
let javaScript= "Javascript";
console.log(js.length);
//Boşluklar da karaktere dahildir.


//String İndeksleri
let cPlus = "CPlusPlus";
console.log(cPlus[0]); //C
console.log(cPlus[4]); //s
console.log(cPlus[5]); //P
//son karakteri almak için:
console.log(cPlus[cPlus.length - 1]);


//toUpperCase() - toLowerCase()
//tüm harfler büyük ya da küçük
console.log(cPlus.toUpperCase());
console.log(cPlus.toLocaleLowerCase());


//substring()
//slice mantığıyla dilimleme
console.log(cPlus.substring(0, 4));
//Başlangıç 0. indeks, bitiş 4. indeks fakat bitiş dahil edilmez.

//split()
//String'i parçalayıp array'e dönüştürür.
let javascriptCourse = "30 Days Of Javascript";
console.log(javascriptCourse.split(" "));
//(4) ['30', 'Days', 'Of', 'Javascript']


//trim()
//başındaki ve sonundaki boşlukları kaldırır
let username = "    Omurhan     ";
console.log(username); //    Omurhan     
console.log(username.trim()); //Omurhan
//fakat ortadaki boşluklara dokunmaz!


//includes()
//stringin içerisinde belirli bir şey var mı
let text = "Javascript";
console.log(text.includes("Java")); //true
//burada da case-sensitive var



//replace()
//yeni bir strin üretir.
let newText = text.replace("Javascript", "Python");
console.log(newText); //Python
console.log(text); //Javascript
//replace yeni bir string üretir, eskiyi de saklar.


//charAt()
//belirli indeksteki karakteri verir
console.log(text.charAt(7)); //i -> Javascript
console.log(text[7]); //i -> bu şekildeki kullanım çok daha yaygın


//charCodeAt()
//karakterin UTF-16 kod birimini verir
console.log("Javascript".charCodeAt(0)); //74


//indexOf()
//Girilen değerin indeksini gösterir
let yapayZeka = "ChatGPT";
console.log(yapayZeka.indexOf("t")); //3
console.log(yapayZeka.indexOf("T")); //6
//burada da case-sensitive var
console.log(yapayZeka.indexOf("K")); //-1
//eğer girilen değer yoksa -1 döndürür


//lastIndexOf()
//aynı şey birden fazla geçiyorsa en sonuncusunun indeksini bul
let love = "love love love, çokça love";
console.log(love.lastIndexOf("love")); //22
//ilk harfin başlangıç indeksini gösterir


//concat()
//string birleştirir
let first = "Java";
let second = "Script";
console.log(first.concat(second)); //JavaScript


//starsWith() - endWith()
let yazilimDili = "JavaScript";
console.log(yazilimDili.startsWith("Java")); //True
console.log(yazilimDili.endsWith("ript")); //True
console.log(yazilimDili.startsWith("Sc")); //false
//case sensitivy var


//search()
//aranan şeyin başladığı indeksi veriyor
console.log(love.search("o")); //1 -> love (1)


//repeat()
//stringi tekrarlar
console.log("hi".repeat(3)); //hihihi

//-----------------------------------------------------------------------------------------------


//Veri Tipi Dönüşümleri
let numNumber = 10; //number
let numString = "10"; //string
//Bunlar aynı şey değildir.


//parseInt()
//Ondalık kısmı almaz!
let numInt = parseInt(numString);
console.log(typeof(numInt)); //number

let numSayi = Number("10");
console.log(typeof(numSayi)); //Number

let numSayiDonustur = +"10";
console.log(typeof(numSayiDonustur)); //Number

//floatlar için de yine Number
let numFloat = "9.81";
let yeniFloat = Number(numFloat);
console.log(typeof(yeniFloat)); //Number

//Number vs parseInt()
console.log(Number(10.5)); //10.5
console.log(parseInt(10.5)); //10 -> ondalıklı kısmı almaz
console.log(Number("10px")); //NaN
console.log(parseInt("10px")); //10


//NaN
console.log(typeof(NaN)); //number
console.log(Number("Merhaba Dünya!")); //NaN
//Geçerli bir sayıya dönüştürmeye çalıştım fakat başaramadım gibi bir anlamı var.

//-----------------------------------------------------------------------------------------------------------------------------------------


//Boolean

let isLightOn = true;
let isRaining = false;

console.log(5 > 3); //true


//truthy - falsy
//Bazı değerler koşul içerisinde kullanıldığında true, bazıları false gibi davranır

//Falsy
//false - 0 - -0 - 0n - "" - null - undefined - NaN

//Truthy
//5 - -5 - "Merhaba" - " " - [] - {} vs.


//Undefined - Null
let tanimsiz;
console.log(tanimsiz); //undefined

let bilerekbos = null;
console.log(bilerekbos); //null

//undefined = değer atanmamış
//null = bilinçli olarak değer yok

//--------------------------------------------------------------------------------------------

//Atama Operatörleri
let u = 5;
let t = 4;
console.log(u+= t); //u = u + t
console.log(u);
console.log(u -= t);
console.log(u);


//Comparison Operators
console.log(5 == "5"); //true, çünkü (==) tür dönüşümü yaparak karşılaştırır.
//yani 5 == "5" demek ikisinin de 5 olduğunu görüp true döndürür.
console.log(5 == "6"); //false
//yani değer eşit mi değil mi ona bakar

console.log(5 === "5"); //false
//burada ise hem değere hem de type'ın eşit olup olmadığına bakar
console.log("5" === "6"); //false
console.log("5" === "5"); //true

console.log(5 != "5"); //false
console.log(5 !== "5"); //true


//null == undefined
console.log(null == undefined); //true - birbirine eşit kabul edilir
console.log(null === undefined); //false - fakat tipleri farklı olduğu için false olur


//Logical Operators

//&& - AND
//iki tarafta doğruysa doğru verir
//  true && true
console.log(5 > 4 && 5 > 2); //true


//|| - OR
//en az bir taraf doğruysa sonuç doğru
//  false || false -> false
console.log(10 < 7 || 8 > 4); //true
console.log(6 > 10 || 8 < 4); //false


//! - NOT
//değeri tersine çevirir
console.log(!true); //false
let lightİsOff = !isLightOn;
console.log(lightİsOff); //false

//----------------------------------------------------------------------------------

//Increment Operator
let count = 0;

//pre-increment
console.log(++count); // 1 -> önce arttırıyor 

//post-increment
console.log(count++); // 1 -> önce değeri yazdırıyor sonra arttırıyor.
console.log(count); // 2

//önce arttır, sonra kullan (pre-increment)
//önce kullan, sonra arttır (post-increment)

//----------------------------------------------------------------------------------

//Ternary Operator

let onunYasi = 19;
/* if (onunYasi >= 18){
    console.log("Yetişkin");
} else {
    console.log("Çocuk");
} 
şeklindeki ifadeyi daha kısa yazarız. */

let sonuc = onunYasi >= 18 ? "Yetişkin" : "Çocuk";
console.log(sonuc); //Yetişkin

//Operator Precedence
//Tipik işlem önceliği ve soldan sağa doğru işlem sırası


//-----------------------------------------------------------------------------------------------------

//alert()
//bir popup gösterir
//alert("Merhaba Dünya");

//prompt()
//Kullanıcıdan veri ister
//let istek = prompt("Bir sayı girin:");
//console.log(Number(istek));
//Prompt'a girilen veriler birer string ifadedir


//confirm()
//Kullanıcıya onay sorar
//const agree = confirm("Silmek istediğinize emin misiniz?");
// true - false değer alır

/* alert(
    agree
        ? "Silme işlemi başarılı"
        : "Silme işlei başarısız"
); */

//---------------------------------------------------------------------------------------------

//Data Object
let date = new Date();
console.log(date);
//bilgisayardaki anlık tarihi alır

//getFullYear()
console.log(date.getFullYear()); // 2026

//getMonth()
console.log(date.getMonth()); //8
//Burada aylar 0'dan başlar (Ocak)

//getDay()
console.log(date.getDay()); //5
//Günler de 0'dan başlar (Pazar)

//getDate()
console.log(date.getDate()); //18
//Ayın gününü verir


//getHours() - getMinutes() - getSeconds()
console.log(date.getHours()); //16
console.log(date.getMinutes()); //48
console.log(date.getSeconds()); //29

//Egzersiz
//17 Ocak 2004, Cumartesi 10.15
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let dayNumber = date.getDay();
let hour = date.getHours();
let minute = date.getMinutes();

let months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];

let anlikTarih = `${day} ${months[month]} ${year}, ${days[dayNumber]} ${hour}:${minute}`;
console.log(anlikTarih);

//-------------------------------------------------------------------------------------------------------------------------------------------------

//Koşullar

//if
let num = 3;
if(num > 0){
    console.log(`${num}, pozitif bir sayıdır!`);
}

let raining = true;
if (raining){
    console.log("Hava Yağmurlu!");
}


//if - else
if(raining){
    console.log("Şemsiye Al!");
} else{
    console.log("Şemsiyeye gerek yok!");
}

//if - else if - else
/* let yasim = Number(prompt("Lütfen Yaşınızı Girin: "));
if(yasim < 18){
    console.log("Çocuk");
}else if (yasim < 25){
    console.log("Genç Yetişkin");
}else if (yasim < 60){
    console.log("Yetişkin");
}else {
    console.log("Yaşlı");
} */



//switch
/* let havaDurumu = prompt("Lütfen hava durumunu girin!");

switch(havaDurumu){
    case "R":
        console.log("Hava Rüzgarlı!");
        break;

    case "Y":
        console.log("Hava Yağmurlu!");
        break;
    
    default:
        console.log("Hatalı Durum!");
} */


//ternary
let abc = 14;
console.log(abc == 15 ? "abc, 15'tir" : "abc, 15 değildir!");

//---------------------------------------------------------------------------------------------------------

//Array
let arrayCreate = Array();
let arrayCreate1 = [];
//ikisi de array oluşturur (fakat pratilte 2 daha yaygın)

let arrayCreate2 = ["Anıl", 12, "Yavuz", 14.5, "Kuru", undefined, null, "Matris"];
//array, birden farklı türden değerleri aynı anda taşıyabilir.

//lenght() ve indeks
console.log(arrayCreate2.length); //8
console.log(arrayCreate2[3]); //14.5

//split()
let Js = "Javascript";
console.log(Js.split("")); //['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
//bu şekilde array'e dönüştürür.
// ("") ifadesi karakterlere ayırır

let adlandirma = "Ali Veli Ahmet";
console.log(adlandirma.split(" ")); //['Ali', 'Veli', 'Ahmet']
//bu şekilde de boşluklardan ayırır.


//const - array 
const sayilar = [1, 2, 3, 4, 5];
sayilar[0] = 10;
console.log(sayilar); //[10, 2, 3, 4, 5]
//normalde const değiştirilemez fakat burada değişkeni değil array'in içerisini değiştiriyoruz.
//const bu değişkenin başka bir array göstermesini engeller


//array(x)
let empty = Array(8);
console.log(empty); //[empty × 8]
//falat buradaki empty, undefined ile aynı şey değildir.


//fill()
let emptyFill = Array(5).fill("Loading");
console.log(emptyFill); //['Loading', 'Loading', 'Loading', 'Loading', 'Loading']


//concat()
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const toplamList = firstList.concat(secondList);
console.log(toplamList); //[1, 2, 3, 4, 5, 6]
//mevcut array'ler değişmez, yeni bir array oluşur.


//indexOf()
let besliSayilar = [5, 15, 25, 35, 45];
console.log(besliSayilar.indexOf(5)); //1
console.log(besliSayilar.indexOf(35)); //3
console.log(besliSayilar.indexOf(7)); //-1
//girilen değerin hangi indexte olduğu gösterir
//eğer yoksa -1 verir

//lastIndexOf()
const sayilarSon = [1, 2, 2, 4, 1, 2, 1, 2, 1, 1, 4, 1, 2, 1];
console.log(sayilarSon.lastIndexOf(2)); //12
//indeksi aramaya sondan başlar fakat yine normal sıraya göre indeks numarasını verir.
//yani array içerisindeki son bulunduğu index kaç


//includes()
let varMiYokMu = ["Ali", "Mehmet", "Rıza"];
console.log(varMiYokMu.includes("Ali")); //true
console.log(varMiYokMu.includes("ali")); //false
//yine case-sensitive var


//Array.isArray()
let arrayMi = [1, 2, 3, 4];
let degilMi = "String";
console.log(Array.isArray(arrayMi)); //true
console.log(Array.isArray(degilMi)); //false

let parcalanmis = degilMi.split("");
console.log(Array.isArray(parcalanmis)); //true
console.log(parcalanmis); //['S', 't', 'r', 'i', 'n', 'g']


//toString()
const stringeDondur = ["Anıl", "Yavuz", "Ahmet"];
let stringeDonmusHali = stringeDondur.toString(); 
console.log(stringeDonmusHali);//Anıl,Yavuz,Ahmet

//geri dönüştür
let yeniArray = stringeDonmusHali.split(" ");
console.log(yeniArray); //['Anıl,Yavuz,Ahmet']


//join()
console.log(stringeDondur.join("-")); //Anıl-Yavuz-Ahmet

//slice()
const sliceArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(sliceArray.slice(0, 4)); //[1, 2, 3, 4]
//0 dahil - 4 hariç şekilde yazılır.
//pythondaki mantık ile aynı
//slice, orjinal array'i değiştirmez


//splice()
//istenilenleri çıkartma - ekleme
//splice, array'in kendisini değiştirir ve üç temel parametresi vardır
//array.splice(başlangıçIndexi, kaçTaneSilinecek, eklenecekler...)
const spliceArray = [1, 2, 3, 4, 5, 6];
console.log(spliceArray.splice(0, 3, 6, 5, 4)); //burada splice'ın return ettiği yani silinenler bulunuyor.
console.log(spliceArray); //array'ın yeni hali de burada

//push()
const pushArray = [1, 2, 3, 4, 5];
console.log(pushArray.push("sayilar")); //6 -> yeni eklediği elemanı değil, yeni array'ın lenght değerini döndürür
console.log(pushArray); //[1, 2, 3, 4, 5, 'sayilar']

//pop()
let popArray = [1, 2, 3, 4, 5];
let sonDeger = popArray.pop(); //son elemanı değerden çıkarır ve döndürür
console.log(sonDeger); //5

//shift()
//baştan çıkarır ve çıkardığı elemanı döndürür
let shiftArray = [1, 2, 3, 4, 5];
console.log(shiftArray.shift()); //1

//unshift()
//başa ekler ve yeni lenght'i döndürür
let unshiftArray = [1, 2, 3, 4, 5];
console.log(unshiftArray.unshift("Ali")); //6 -> çünkü lenght döndürür
console.log(unshiftArray); //['Ali', 1, 2, 3, 4, 5]

//reverse()
let reverseArray = [1, 2, 3, 4, 5];
console.log(reverseArray.reverse()); //[5, 4, 3, 2, 1]
//tersine çevirir - orjinal array'i değiştirir

//sort()
const sortArray = [4, 1, 3, 2, 5, 9, 7, 6];
console.log(sortArray.sort()); //[1, 2, 3, 4, 5, 6, 7, 9]
//burada bir sıralama yapar fakat bu sıralama değerleri string gibi karşılaştırır

//İç içe Array
const arrayToArray = [4, 1, 10, [2, 8, 4, 6], 7, 9, 11];
console.log(arrayToArray[3][2]); //4
// 3. Array'in 2. Array'ini arar.

//----------------------------------------------------------------------------------------------

//Loops

//for
for(let i = 0; i < 7; i++){
    console.log(`${i}, 7'den küçüktür!`);
}
//for(başlangıç; koşul; değişim)


//array + for
let names = ["Ali", "Ayşe", "Beyza"];

for(let n = 0; n < 10; n++){
    console.log(names[n]);
}

for(let m = 0; m < names.length; m++){
    console.log(names[m]); //Ali - Ayşe - Beyza
}


//sum
const sayilarArray = [1, 2, 3, 4, 5];
let sume = 0;
for(s = 0; s < sayilarArray.length; s++){
    sume += sayilarArray[s];
    console.log(sume);
}

//array'den yeni array oluşturma
let countries = ["turkey", "azerbaijan", "cyprus"];
let newCountries = [];

for(let c = 0; c < countries.length; c++){
    newCountries.push(countries[c].toLocaleUpperCase());
    console.log(newCountries) //'TURKEY', 'AZERBAIJAN', 'CYPRUS']
}


//while
let kosul = 0;

while(kosul < 5){
    console.log(`${kosul}, 5'ten küçüktür!`);
    kosul++;
}


//do while
let z = 0;
do{
    console.log(z);
    z++;
}while(z <= 5);

let d = 10; //10'u bir kere yazdırır.
do{
    console.log(d);
    d++;
} while(d < 5);


//for..of
let isimler = ["Ali", "Ayşe", "Beyza"];
for(let ismimiz of isimler){
    console.log("Adı:", ismimiz);
}

//break
for(let p = 0; p <= 10; p++){
    if(p == 5){
        console.log(`${p}, örüntünün yarısıdır!`);
        break;
    }
    console.log(p);
}


//continue
for(let f = 0; f < 10; f++){
    if(f == 5){
        console.log("Bay Geç!");
        continue;
    }
    console.log(f);
}

//------------------------------------------------------------------------------------------












