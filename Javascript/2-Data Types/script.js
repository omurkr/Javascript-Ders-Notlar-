//Primitive Data Types
//Değiştirilemez veri tipler. Bunlarda bir değişiklik yapılmaz. Sadece değerler karşılaştırılır.

let numOne = 3;
let numTwo = 3;

console.log(numOne == numTwo); //true -> değerler olarak bir eşitlik bahsediyor. 3 = 3 demek yani.

let js = "Javascript";
let py = "Python";

console.log(js == py); //false -> değerler birbirlerine eşit değil.

//Non-Primitice Data Types
//İlkel olmayan, değiştirilebilir veri tipleridir. 

let nums = [1, "prototurk", true, null, undefined]; //array -> diziler, birden fazla değeri tutabiliyoruz.
nums[0] = 10;
console.log(nums);
nums[1] = "alsancak";
console.log(nums);
nums[2] = false;
console.log(nums);

let nums1 = [1,2,3];
let nums2 = [1,2,3];

console.log(nums1 == nums2); //false -> farklı kontrol sağlanıyor

let nums3 = nums1;
console.log(nums1 == nums3); //true -> referansları birbirini tuttuğu için true değerini alıyor. ""

let userOne = {
    name: 'Tayfun',
    surname: "Erbilen"
};

let userTwo = {
    name: "Tayfun",
    surname: "Erbilen"
};

console.log(userOne == userTwo); //false

//NUMBERS

const PI = Math.PI;  //pi sayısını veriyor.
console.log(PI);

console.log(Math.round(PI)); //math modülünün round fonksiyonu ile yuvarlaması.
console.log(Math.round(9.81)); //sondaki değer 0.5 ve üstü ise yukarı, 0.49 ve altı ise aşağıya yuvarlıyor
console.log(Math.floor(9.81)); //tabana al demek yani tabandaki sayıyı ekrana veriyor
console.log(Math.ceil(9.81)); //tavana al demek yani en yüksekteki tavana yuvarlar
console.log(Math.min(-5, 1, 10, 2, 2003, -1230)); //içerideki en düşüğü veriyor. 
console.log(Math.max(9, 10, -321321, 2, 321, 3213214)); //içerideki en büyük sayıyı veriyor.

const randNum = Math.random(); //0 ile 9.999999 arasında rastgele bir sayı oluşturur.
console.log(randNum);
const randNum1 = Math.floor(Math.random() * 11); //0 ile 10 arasında rastgele bir sayı üretmek istediğimiz zaman bunu kullanıyoruz. floor ile tabana yuvarlıyoruz.
console.log(randNum1);

console.log(Math.abs(-10)); // 10 -> Mutlak Değer
console.log(Math.sqrt(2)); // 1.41 -> karekök alma

let randomNum = Math.random();
console.log(randomNum);


//STRİNGS
let firstName = "Anıl";
let lastName = "Kuru";
let age = 250 + " yaşında";
let fullName = firstName + ' ' + lastName + " " + age;
console.log(fullName);

let paragraph = "hello, mr, durley. My name is Phantom Bennet! I am\
20 years old.";
console.log(paragraph)

let paragraph1 = "hello, mr, durley. My name\n is Phantom\n Bennet! I am"; //alt satıra geçiyor
console.log(paragraph1);

let paragraph2 = "hello, mr, durley. My name\t is Phantom\t Bennet! I am"; //bir tab boşluğu oluşturuyor 8 karakterlik
console.log(paragraph2);

let paragraph3 = 'hello, mr, durley. My name\'s Phantom Bennet! I am'; //tek tırnaklı için \' kullanılıyor ki ' işaretini kullanabilelim.
console.log(paragraph3); //backslash içinde //, çift tırnak içinde /" koymak gerekiyor.

data = "Anıl";
console.log(`Sizin adınız ${data}'mıydı?`); //pythondaki f"string mantığı.

a = 5;
b = 4;

console.log(`${firstName} 
test
deneme  
${a} + ${b} = ${a + b}
${lastName}`); //modern kullanım bu şekilde. + derdi, birleştirme derdi vs yok!

console.log(`${a} > ${b} = ${a > b}`) //bu şekilde matematiksel işlemler de gerçekleştirilebilir.

//String Methodları

//lenght()

let javaScript = "Javascript";
console.log(javaScript.length);

let string = "JavaScript";
// indeks     0123456789

console.log(string[0]);
console.log(string[5]);
console.log(string[9]);

let lastIndex = string.length - 1;
console.log(lastIndex);


//toUpperCase()
console.log(string.toUpperCase()); //büyü harfe çeviriyor.


//substr()
console.log(string.substr(4,6)); // -> 4.ten başla ve sonraki 6 karakteri al demek yani Script

//substring()
console.log(string.substring(4,6)); // -> 4'ten başla 6'ya kadar (6 dahil değil) al. Klasik python mantığı!

//split()
let adimiz = "Anıl Başar Ertuğrul";
console.log(adimiz.split()); //['Anıl Başar Ertuğrul']
console.log(adimiz.split(' ')); //(3) ['Anıl', 'Başar', 'Ertuğrul']
console.log(adimiz.split("")); //(19) ['A', 'n', 'ı', 'l', ' ', 'B', 'a', 'ş', 'a', 'r', ' ', 'E', 'r', 't', 'u', 'ğ', 'r', 'u', 'l']
// parçalama -> belirtilen şekilde bölmeye yarıyor. 


//trim()
let boslukluMesaj = "        boşluklu bir mesaj        ";
console.log(boslukluMesaj.trim()); //boşluklu bir mesaj -> boşlukları baştan ve sondan kaldırır.


//includes()
let kursunAdi = "30 Days Of Javascript";
console.log(kursunAdi.includes("Days")); //True
console.log(kursunAdi.includes("days")); //false -> case sensitivy
// içerisinde barındırıyor mu barındırmıyor mu ona bakar. Büyük-küçük harf duyarlılığı vardır. 


//replace()
let yeniKurs = kursunAdi.replace("Javascript", "Python"); // istenileni değiştiriyor.
console.log(yeniKurs);

//charArt()
console.log(yeniKurs.charAt(0)); // -> bu da indeks mantığı sadece parantez içerisinde olan.
console.log(yeniKurs.charCodeAt(0)); // -> aynı işlemin ASKII halini döndürüyor.


//indexOf()
console.log(yeniKurs.indexOf("D")); // -> "30 Days Of Python" yazımızdaki "D" harfinin olduğu indeks 3
console.log(yeniKurs.indexOf("p")); // -> aradığı şeyi bulamazsa -1 döndürür
console.log(yeniKurs.indexOf("Python")); //11 indeks P ve ondan sonra Python yazıyor.

//lastIndexOf()
let newWord = "laaalaalallalal";
console.log(newWord.lastIndexOf("a")); // sondan başlayarak ilk aradığı kelimenin normal haldeki indeksini bulur.
//normal indeksle bir farkı yok ikisi de aynı indeksi verir fakat birisi baştan ararken diğeri sondan arar.

//concat()
//birden fazla alt metni birleştirir
let country = "Fin";
console.log(country.concat("land")); //Finland


//startsWith()
let askMektubu = "Ben sana tutkunum leyla, bunu anlayamazsın!"
console.log(askMektubu.startsWith("Ben")); //true -> yazılan kelimeyle başlayıp başlamadığını kontrol ediyor.
console.log(askMektubu.startsWith("ben")); //false


//endsWith()
console.log(askMektubu.endsWith("anlayamazsın!")) //true -> aynı mantıkla "bununla bitiyor mu" diye soruyor.


//search()
console.log(askMektubu.search("l")); // 18 -> girilen ifadenin ilk stringini arıyor.
console.log(askMektubu.search("a")); // 5


//match()
let string2 = "I love Javascript. If you do not love Javascript what else can you love.";
console.log(string2.match('love')); //['love', index: 2, input: 'I love Javascript. If you do not love Javascript what else can you love.', groups: undefined]

console.log(string2.match(/love/g)); //(3) ['love', 'love', 'love'] -> Fakat bu REGEX

let txt = 'In 2019, I ran 30 Days Of Python. Now, in 2020 I am super exited to start this challenge';
let regEx = /\d+/;
console.log(txt.match(regEx));
console.log(txt.match(/\d+/g));


//repeat()
let tekrar = "love";
console.log(tekrar.repeat(10)); //kaç kere tekrarlamasını istersek o kadar tekrarlıyor.


//Changing Data Types (Casting)
//aritmetik işlem yaparken önce bu arkadaşları bir int değere çevirmemiz gerekiyor.

//String to Int

//parseInt() -> içerisine yazılan sayıyı number'a çevirir (int)
let sayi1 = "19";
console.log(typeof(sayi1)); //string
console.log(typeof(parseInt(sayi1))); //number

//number()
let sayi2 = Number("22");
console.log(typeof(sayi2)); //number -> int

//+
let sayi3 = +"26";
console.log(typeof(sayi3)); //number -> int = en kolay yöntem bu


//String to float

//parsefloat()
let sayi4 = "99.5";
console.log(typeof(parseFloat(sayi4))); //number -> float

//number
let sayi5 = Number("55.5");
console.log(typeof(sayi5)); //number -> float

//+
let sayi6 = +"14.2";
console.log(typeof(sayi6)); //number -> float








