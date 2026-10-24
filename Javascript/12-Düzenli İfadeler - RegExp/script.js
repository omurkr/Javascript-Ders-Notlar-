//REGULAR EXPRESSİONS
// Bilinmeyeni bulmak.

let str = "ben 30 yaşındayım ve 1993 yılında doğdum.";
let username = "tayfun-erbilen";

//Regxp Parameters
// - Pattern
// - Flags

/*
g - global flag
i - insensitive case => büyük küçük harfe duyarsız
m - multiline -> çoklu satır
*/

//regex
// 1 - RegEpx constructor

let pattern = "love";
let flag = "gi";
let regEx = new RegExp(pattern, flag);
//let regEx = new RegExp("love", "gi"); - şeklinde de yazılabilir.

//diğer bir yazım bu şekilde, yukarıdakiyle birbirine eşittir.
let regex = /love/gi;

/* let word = /salak/i
let command = prompt("Yorumunu yaz: ");

//test
if (word.test(command)){
    alert("Hayır sen salaksın!");
}; */

//regexlearn.com sitesi
//kablosuzkedi regex videosu

//array containing

let string = "ı love jAvascript and ı love Prototurk"
console.log(string.match(/love/ig)); //boşlukta bir indeks değeri
//i => büyük küçük fark etmez
//g => sadece ilk elemanı değil hepsini alıyor

//search
console.log(string.search(/love/ig)); //bu da indeksini veriyor


//replace a substring

//replace

const txt = "Python is the most beautiful language that a human begin has ever created. \
I recommend python for a first programming language";

let matchreplaced = txt.replace(/Python | python/g, "Javascript");
console.log(matchreplaced);

//text içerisindeki değerleri bu şekilde desenlereyerek değiştirebiliriz.


const metin = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

console.log(metin.replace(/%/g, ''));



//A set of characters
/*
-- [] --
[a-c] = a ya da b ya da c
[a-z] = a'dan z'ye kadar olan latin harfler
[A-Z] = büyük harfler
[0-3] = 0 ya da 1 ya da 2 ya da 3
[0-9] = 0'dan 9'a kadar olan sayılar
[A-Za-z0-9] = herhangi bir Büyük Karakter - küçük karakter ve 0'dan 9'a kadar olan sayı.

*/

let newStr = "Ben 22 yaşındayım ve öğrenciyim, 2004'te doğdum";

console.log(
    newStr.match(/[0-9]/g)
)

/*
-- \ --
\d = sadece sayıları içeriyor
\D = içerisinde sayı olmayan stringler ile eşleşiyor

*/

console.log(
    newStr.match((/\d/))
)

console.log(
    newStr.match(/\D/)
)

/*
-- . --
. = herhangi bir karakter 

*/

/*
-- ^ --
^ = bununla başlar
[^] = olumsuz oluyor 

*/

let firstName = "1tayfun";

console.log(/^[^0-9]+$/.test(firstName)) //bunu anlamadım!

/**

-- * --
hiç olmayadabilir ya da oladabilir

-- + --
1 ya da daha fazlası

-- ? --
ya hiç yok ya da 1 tane var

/b = kelime sınırlayıcı

{3} = 3 karakterle eşleşir

{3,} = en az 3 karakter

{3,8} = 3 ile 8 arasındaki karakerler

| = ya şu ya bu

() = grupları yakalamak için kullanılıyor

*/

console.log(
    newStr.match(/\d+/g)
)

console.log(
    newStr.match(/\d{2}/g)
)

console.log(
    newStr.match(/\b\d{2}\b/g)
)

let pattern1 = "taygin";

console.log(
    /[u|a]n$/.test(pattern1)
)

console.log(
    /a?n$/.test(pattern1)
)


//Period (.)

const pattern3 = "Apple and banana are fruits";

console.log(
    pattern3.match(/[a]./g)
)

// Zero or more times (*)

const pattern4 = "Kiwi and orange are fruits";

console.log(
    pattern4.match(/[a].*/g)
)


// Zero or One Times (?)

const email = "I am sure email or E-mail";

console.log(
    email.match(/[Ee]-?mail/ig)
)


// Quatifier in RegExp

const yil = "1994'te doğdum, 2006 ta okulu bitirdim ve 23'te evlendim. ";

console.log(
    yil.match(/\b\w{4}\b/g)
)

let date = "2004-12-21";

console.log(
    date.match(/\d{4}-\d{2}-\d{2}/g)
)