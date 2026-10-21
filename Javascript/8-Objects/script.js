//Scope

//Window Scope
ad = "Ömür" //window kapsamı (window objesi)
//let, var ya da const ile tanımlanmadıysa window objesinin altında gözükmektedir.
console.log(window.ad);


//Global Scope
//Aynı dosyada her yerden erişilebilen değerdir - ya da kod bloğu içerisinde
let a = "Javascript";
let b = 10;
function letsLearnScope(){
    console.log(a, b);
    if(true){
        let a = "Python"; //local scope denir.
        let b = 100; //if bloğunun dışına çıkmaz!
        console.log(a, b);
    }
    console.log(a, b);
}
letsLearnScope();
console.log(a, b);

//Local Scope
//Sadece belirli bir blok içerisinde 
let isim = "Ömür";
let soyisim = "Kuru";
function kisiBilgileri(){
    console.log(isim, soyisim);
    if(true){
        let isim = "Bu localdir";
        console.log(isim);
    };
};
kisiBilgileri();


//var ile oluşturulanlar fonksiyon kapsamında, let/const ile oluşturulanlar ise blok kapsamının içerisindedir.
{
    let deneme = "test";
    console.log(deneme); //bu da bir blok scope'tur.
}

function gravityScope(){
    var gravity = 9.81;
    console.log(gravity);
}
gravityScope();

for(let i = 1; i <= 5; i++){
    console.log("son i", i);
}
//console.log(i);

//-----------------------------------------------------------------------------------------------------------------------------

//Object
//Bir nesne, anahtar - değer ikilisi gibidir.
const person = {}
console.log(person);

const ben = {
    ilkAdim: "Ömür",
    soyAdim: "Kuru",
    yasim: 29,
    medeniDurum: false,
    telefon: '5332658457',
    test: {
        deneme: "Deneme Text"
    },
    yetenekler: ["HTML", "CSS", "Python"],
    aileBilgisi: [
        {
            adi: "Ömer",
            soyAdi: "Kuru",
            yakinlik: "Babam",
        }
    ],
    getTamAdim: function(){ //object methodu
        return `${this.ilkAdim} ${this.soyAdim}`
    },
    getTamAdim2: () => `${ben.ilkAdim} ${ben.soyAdim}`
}

console.log(ben);
let keyname = 'yetenekler';

//Objeden Data'lara Erişmek
//using. key name
//[] ve ''
console.log(ben.ilkAdim);
console.log(ben.medeniDurum ? "Evli" : "Bekar");
console.log(ben.test.deneme);
console.log(ben.yetenekler[2]);
console.log(ben.aileBilgisi[0]);
console.log(ben['telefon']);
console.log(ben[keyname]);


//Creating Object Methods
console.log(ben.getTamAdim());

//Arrow Function, Object Methotunda kullanılmaz!
console.log(ben.getTamAdim2());

//Yeni Key Tanımlama
//Objeler 1 kere tanımlandıktan sonra modifiye edilebilir.
ben.ilkAdim = "Ömürhan";
console.log(ben.ilkAdim);

//array'e de eklemeler yapılır.
ben.yetenekler.push("React");
ben.yetenekler.push("Vue");
console.log(ben.yetenekler);

ben.getPersonInfo = function(){
    let skillsWithoutLastOne = this.yetenekler.splice(0, this.yetenekler.length - 1).join(", ")
    let lastSkill = this.yetenekler.at(-1);
    let yetenekler = `${skillsWithoutLastOne} and ${lastSkill}` //alternatifi Intl.list
    console.log(yetenekler);
}
console.log(ben.getPersonInfo());


//Object Methods

//object.assign
//Orjinal objeyi bozmadan objeyi kopyalar
let newUser = Object.assign({}, ben);
console.log(ben);
newUser.ilkAdim = "Murat";
console.log(newUser);

//object.key
console.log(Object.keys(ben));

//object.values
console.log(Object.values(ben));

//Object.enries
console.log(Object.entries(ben));

for(let [key, val] of Object.entries(ben)){
    console.log(`Key: ${key}, ${val}`);
}

//hasOwnroperty
console.log(ben.hasOwnProperty('country')); //false
console.log(ben.hasOwnProperty('ilkAdim')); //true

//object.freeze
//dondurur ve hiçbiri geçerli olmaz, değiştirilmez.

//object.seal
///ekleme - silme yapamaz ama var olan değerleri güncelleyebiliriz.
