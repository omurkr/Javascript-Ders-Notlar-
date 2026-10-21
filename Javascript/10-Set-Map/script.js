//SET
//set öğeler bütünlüğüdür. Set sadece benzersiz elemanları içerir. 
//Küme mantığı gibi düşün!

const namesSet = new Set(['tayfun', 'ahmet', 'mehmet']);
console.log(namesSet);

//set tekrarlanabilen bir nesnedir
/* for (let name of namesSet){
    console.log('Ad', name);
}; */

namesSet.forEach(name => console.log(name));

//map - filter vs. gibi dizi gerektiren işlerde doğrudan kullanılmaz, diziye dönüştürülmesi gerekiyor!
[...namesSet].map(name => console.log(name));

//sete özel metotlar

//.add
namesSet.add("Ali");
namesSet.add("erkan");
namesSet.add("fatih");
console.log(namesSet);

const names = ["bora", "umut", "utku"];

for (let name of names){
    namesSet.add(name);
};

console.log(namesSet);

//.delete
//eleman siliyor
console.log(namesSet.delete("bora"));

//.size
console.log(namesSet.size); //8

//.has
//eleman var mı yok mu kontrol ediyor
console.log(namesSet.has("bora")); //false

//.clear
//tüm elemanları siler
//console.log(namesSet.clear);

//set her bir elemanın unique olmasını istiyor
namesSet.add("15");
namesSet.add("utku");
namesSet.add("15");
console.log(namesSet);

//unique yapmak için
const isimler = ["ahmet", "ahmet", "mehmet", "mehmet", "mehmet", "hakan", "ali", "ali", "ali", "ali", "ali"];
console.log(isimler);

console.log(new Set(isimler));
console.log([...new Set(isimler)]); //bu şekilde de bir dizi olarak kullanabiliyoruz.



//küme birleşimini bulabiliyoruz
const a = [1, 2, 3, 4, 5];
const b = [3, 4, 5, 6];
const c = [...a, ...b];

console.log(new Set(c));

//küme kesişimini de bulabiliyoruz
const d = new Set(b);

console.log(a.filter(num => d.has(num)));


//küme farkını bulmak için
const e = new Set(b);
console.log(a.filter(num => !e.has(num)));



//MAP
const map = new Map();

map.set("1", "str"); //değer ekliyoruz
map.set(1 , "num"); //numara olarakta tutuluyor
map.set(true, "bool1"); //boolean oılarak tutuluyor
map.set(false, "bool2");

console.log(
    map.get(false),
    map.get("1")
)

console.log(map.size); //4

const tayfun = {
    name: "tayfun"
};

const ahmet = {
    name: "ahmet"
};

//chaining
//her bir set metodu çağırıldıktan sonra map'in kendisini döndürür
map.set(tayfun, 10)
    .set(ahmet, 20);


//iteration over map
console.log(
    map.entries,
    map.values,
    map.keys
);

for(let u of map.keys()){
    console.log(u);
};

tayfun.surname = "erbilen";

[...map].forEach(([key, val]) => console.log(val));


//object.entries
console.log(
    Object.entries(tayfun) //objeden map objesi oluşurmaya yarar
);

//object.fromEntries
console.log(
    Object.fromEntries(map)
);


//-------------------------------------------------------------------------------------------------------------------

//SCOPE KAVRAMI
//değişkenin nereden erişilebilir olduğunu belirler

//Global Scope
const dil = "Javascript";
function diliGoster() {
    console.log(dil);
};

diliGoster();
console.log(dil);

//dil, fonksiyon dışında tanımlandığı için hem fonksiyonun içinde hem de dışından erişilebilir.


//local scope
//fonksiyonun içerisinde tanımlanan değişken, fonksiyonun dışından erişilemez!
function kullaniciBilgisi(){
    const isim = "Ömür";
    console.log(isim);
};

kullaniciBilgisi();
//console.log(isim); //ReferenceError


//block scope
//if bloğu içerisinde tanımlanan değişkendir ve o da dışarıya çıkmaz
if(true){
    let mesaj = "İşlem başarılı!";
    console.log(mesaj);
};

//console.log(mesaj); //ReferenceError

//let ve const block kapsamına sahiptir

//-----------------------------------------------------------------------------------------------------------------------

//OBJECT
//Birbirleriyle ilişkili verileri tek bir yerde tutmayı sağlar.

const urun = {
    isim: "Laptop",
    fiyat: 30000,
    stok: 12
};

//özelliklere erişmenin 2 yolu var!
console.log(urun.isim); //1
console.log(urun["isim"]); //2 

//
const bilgilerim = {
    isim: "Ömür",
    yas: 29,
    aktif: true,
    yetenekler: ["HTML", "CSS", "JavaScript"]
};

console.log(bilgilerim.isim);
console.log(bilgilerim["yas"]);
console.log(bilgilerim.yetenekler[2]);

//Özellik ekleme, güncelleme ve silme
urun.kg = 20; //yeni özellik ekleme

urun.fiyat = 18000; //var olan özelliği güncelleme

delete urun.stok; //özellik silme

console.log(urun);

//
const kullanici = {
    isim: "Ayşe",
    yas: 25
};

kullanici.email = "ayse@example.com";
kullanici.yas = 26;
delete kullanici.isim;
console.log(kullanici);


//OBJECT METHODS

//this
const yeniUrun = {
    isim: "Laptop",
    fiyat: 30000,

    indirimliFiyat: function() {
        return this.fiyat * 0.9;
    }
};

console.log(yeniUrun.indirimliFiyat());

//
const urun2 = {
    isim: "Klavye",
    fiyat: 1500,
    indirimOrani: 0.2,
    /* indirimliFiyat: function() {
        return this.fiyat * 0.8;
    } */
   indirimliFiyat: function(){
    return this.fiyat * (1 - this.indirimOrani);
   }
};

console.log(urun2.indirimliFiyat());


//İÇ İÇE NESNELER
const kullanici1 = {
    isim: "Ömür",
    adres: {
        sehir: "Ankara",
        ilce: "Çankaya"
    },
    siparisler: [
        { urun: "Laptop", fiyat: 30000 },
        { urun: "Klavye", fiyat: 1500 }
    ]
};

console.log(kullanici1.adres.ilce);
console.log(kullanici1.siparisler[0]);
console.log(kullanici1.siparisler[1].fiyat);

//
const proje = {
    isim: "MasaDaş",
    ekip: {
        lider: "Ömür",
        uyeSayisi: 4
    },
    gorevler: [
        { isim: "Arayüz", tamamlandi: true },
        { isim: "API entegrasyonu", tamamlandi: false },
        { isim: "Testler", tamamlandi: false }
    ]
};

console.log(proje.ekip["lider"]);
console.log(proje.gorevler[1].isim);
console.log(proje.gorevler[0].tamamlandi);


// NESNELERİ DÖNGÜLERLE İŞLEMEK
const urunler = [
    { isim: "Laptop", fiyat: 30000},
    { isim: "Klavye", fiyat: 1500},
    { isim: "Mouse", fiyat: 800}
];

for(const urun of urunler){
    console.log(urun.isim, urun.fiyat);
};

//Object.entries
//nesnenin özelliklerini [anahtar, key] çiftlerinden oluşan bir diziye dönüştürür.

//
const urunler1 = [
    { isim: "Laptop", stok: 5 },
    { isim: "Klavye", stok: 12 },
    { isim: "Mouse", stok: 0 }
];

for(const urun of urunler1){
    console.log(urun.isim, urun.stok);
}

//Object Metotları
const kullanici2 = {
    isim: "Ömür",
    yas: 29,
    aktif: true
};

//Object.key(kullanici2) => özellik adları
console.log(Object.keys(kullanici2));

//Object.values(kullanici2) => özellik değerleri
console.log(Object.values(kullanici2));

//Object.entries(kullanici2) => değer çiftlerini
console.log(Object.entries(kullanici2));

//
const proje1 = {
    isim: "MasaDaş",
    dil: "Javascript",
    tamamlandi: false
};

console.log(Object.keys(proje1));
console.log(Object.values(proje1));
console.log(Object.entries(proje1));

//Object.assing()
//bir nesnenin özelliklerini başka bir nesneye kopyalamak için kullanılır

const kullanici3 = {
    isim: "Ömür",
    yas: 29
};

const kopya = Object.assign({}, kullanici3);
console.log(kopya);
kopya.isim = "Ahmet";

console.log(kullanici3.isim);
console.log(kopya.isim);

//
const urun3 = {
    isim: "Klavye",
    fiyat: 1500
};

const kopya1 = Object.assign({}, urun3);
kopya1.fiyat = 1200;
console.log(urun3);
console.log(kopya1);


//hasOwnPropert()
//bir nesnenin belirtilen özelliğe sahip olup olmadığını kontrol eder, sonuç olarak boolean döndürür

const kullanici4 = {
    isim: "Ömür",
    yas: 22
};

console.log(kullanici4.hasOwnProperty("isim")); //true
console.log(kullanici4.hasOwnProperty("mail")); //false

//
const proje2 = {
    isim: "MasaDaş",
    dil: "JavaScript",
    aktif: true
};

console.log(proje2.hasOwnProperty("isim"));
console.log(proje2.hasOwnProperty("tamamlandi"));
console.log(proje2.hasOwnProperty("aktif"));


//Object.freeze()
//mevcut özellikleri değiştiremezsin, yeni özellik ekleyip silemezsin!
const kullanici5 = {
    isim: "Ömür",
    yas: 22
};

Object.freeze(kullanici5);

kullanici5.yas = 30;
kullanici5.email = "ornek@hmail.com";
delete kullanici5.isim;

console.log(kullanici5);


//Object.seal()
//yeni özellik ekleyemez veya silemezsin, fakat mevcut özellikleri güncelleyebilirsin
const urun4 = {
    isim: "Klavye",
    fiyat: 1500
};

Object.seal(urun4);

urun4.fiyat = 1200;
urun4.boyut = "150cm";
delete urun4.isim;

console.log(urun4);

//
const ayarlar = {
    tema: "dark",
    bildirimler: true
};

Object.seal(ayarlar);
ayarlar.tema = "light";
ayarlar.dil = "tr";
delete ayarlar.bildirimler;
console.log(ayarlar);

//TOPLU ÖRNEKLER

//
const urunler2 = [
    {
        id: 101,
        isim: "Laptop",
        fiyat: 30000,
        stok: 5,
        kategori: "Elektronik",
        aktif: true
    },
    {
        id: 102,
        isim: "Klavye",
        fiyat: 1500,
        stok: 12,
        kategori: "Aksesuar",
        aktif: true
    },
    {
        id: 103,
        isim: "Mouse",
        fiyat: 800,
        stok: 0,
        kategori: "Aksesuar",
        aktif: false
    }
];

for(const urun of urunler2){
    console.log(urun.isim, ":", urun.fiyat);
}

const aktifUrunler = urunler2.filter(urun => urun.aktif);

const aktifUrunIsimleri = aktifUrunler.map(urun => {
    return urun.isim;
});

console.log(aktifUrunIsimleri);

//
const urun5 = {
    isim: "Laptop",
    fiyat: 30000,
    indirimOrani: 0.1,
    indirimliFiyat: function(){
        let oran = this.fiyat * this.indirimOrani;
        return this.fiyat - oran;
    }
};

console.log(urun5.indirimliFiyat());


//
const urunler3 = urunler2
    .filter(urun => {
        return urun.aktif && urun.stok > 0;
    })
    .map(urun => {
        return urun.fiyat * 0.9;
    })
    .reduce((toplamFiyat, fiyat) => {
        return toplamFiyat + fiyat;
    }, 0);

console.log(urunler3);