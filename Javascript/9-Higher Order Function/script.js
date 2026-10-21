/* // HİGHER ORDER FUNCTİON

//Callback

const fonksiyon = number => number ** 2;

function cube(cb, number){
    return cb(number) * number;
}

console.log(cube(fonksiyon, 3));


//Returning function

const a = s1 => {
    const b = s2 => {
        const c = s3 => {
            return s1 + s2 + s3;
        }
        return c
    }
    return b;
}

console.log(a(5)(10)(20));


//forEach

const numbers = [1, 3, 5, 7, 9];
let total = 0;

//numbers.forEach(number => total += number);

numbers.forEach(function(number){
    total += number;
})

console.log(total);


//Setting Time

function sayHello(){
    console.log("Hello!");
}

const interval = setInterval(sayHello, 1000);

// 5 saniye sonra başka bir fonksiyon gelsin ve setInterval'i iptal etsin!
// clearInterval
// clearTimeout

/* const timeout = setTimeout(() => {
    clearInterval(interval);
    console.log("İnterval işlemi iptal edildi!");
}, 5000);

setTimeout(() => {
    clearTimeout(timeout);
    console.log("Timeout işlemi iptal edildi, interval devam edecek!");
}, 3000);
 


//Functional Programming

//forEach(element, index, arr)

const newArray = [1, 3, 5, 7, 9];
let toplamSonuc = 0;
let hesapla = (sayi, indeks) => toplamSonuc += sayi + indeks;
numbers.forEach(hesapla);

console.log(toplamSonuc);

//map

const numbers2 = numbers.map(number => number * 2);
console.log(numbers2);

let users = [
    {
        id: 2,
        name: "Tayfun",
        gender: 1
    },
    {
        id: 1,
        name: "Anıl",
        gender: 1
    },
    {
        id: 3,
        name: "Yavuz",
        gender: 1
    },
    {
        id: 4,
        name: "Zerafet",
        gender: 2
    }
]

users = users.map(user => {
    if (user.id === 2){
        user.name = "Hakan";
    }
    return user;
})

console.log(users);


//filter
console.log(numbers.filter(number => number > 3 && number < 9));

const women = users.filter(user => user.gender == 2);
const men = users.filter(user => user.gender == 1);

console.log(women);
console.log(men);


//reduce
console.log(numbers.reduce((oldValue, currentValue) => {
    return oldValue + currentValue
}, 0));


//every
console.log(users.every(user => user.gender === 1)); //bütün elemanlara bakar ama 1 tane kadın var.

//some
console.log(users.some(user => user.gender === 1)); //içlerinden 1 elemana bakar varsa true döndürür.

//find
console.log(numbers.find(number => number > 3)); // 5 elemanı verir 

//findIndex
console.log(numbers.findIndex(number => number > 3)); // 2 indeksini verir

//sort
const names = ["Tayfun", "Ahmet", "Mehmet"];
const numaralar = [3, 6, 9, 1, 10, 2.3];
console.log(names.sort());
//console.log(numaralar.sort()); //[1, 10, 2.3, 3, 6, 9]
console.log(numaralar.sort((c, d) => c - d)); // küçükten büyüğe sıralama : [1, 2.3, 3, 6, 9, 10]
console.log(numaralar.sort((c, d) => d - c)); // büyükten küçüğe sıralama : [10, 9, 6, 3, 2.3, 1]


users.sort((g, h) => g.id - h.id)
console.log(users); // a'dan z'ye sıralama!


//localcompane
names.sort((t, y) => t.localeCompare(y));
console.log(names); //['Ahmet', 'Mehmet', 'Tayfun'] A'dan Z'ye doğru ilerliyor isim.
 */


// EGZERSİZ FONKSİYON TEKRAR

// 1
function selamla(isim){
    //console.log(`Merhaba ${isim}!`);
    return `Merhaba ${isim}!`;
};

/* selamla("Ömür");
selamla("Ahmet");
selamla("Mehmet"); */

console.log(selamla("Ömür"));
console.log(selamla("Ahmet"));
console.log(selamla("Mehmet"));

//2
function tekMiCiftMi(sayi){
    if(sayi % 2 === 0){
        return "Çift Sayı";
    } else {
        return "Tek Sayı";
    };
};

console.log(tekMiCiftMi(2));
console.log(tekMiCiftMi(7));
console.log(tekMiCiftMi(-4));


//3
const sayilar = [10, 20, 5, 15, 30];

function diziToplami(newArray){
    let toplam = 0;
    for(let i = 0; i < newArray.length; i++){
        toplam += newArray[i];
    };

    return toplam;
};

console.log(diziToplami(sayilar));

//4
const sayilarDizisi = [12, 5, 8, 21, 4, 17, 30];

function ciftSayilariTopla(array){
    let topla = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            topla += array[i];
        };
    };
    return topla;
};

console.log(ciftSayilariTopla(sayilarDizisi));


//5
const sayilarEnBuyuk = [12, 45, 7, 89, 23, 56];
function enBuyukSayiyiBul(array){
    let enBuyukMu = 12;
    for(let i = 0; i < array.length; i++){
        if(array[i] > enBuyukMu){
            enBuyukMu = array[i];
        }
    }
    return enBuyukMu;
};

console.log(enBuyukSayiyiBul(sayilarEnBuyuk));

//6

const sayilarEnKucuk = [17, 4, 29, 8, 2, 15];
function enKucukSayiyiBul(array){
    let enKucuk = array[0];
    for(let i = 0; i < array.length; i++){
        if(array[i] < enKucuk){
            enKucuk = array[i];
        };
    };
    return enKucuk;
};

console.log(enKucukSayiyiBul(sayilarEnKucuk));

//7
const pozitifSayilarDizisi = [-5, 12, 0, 8, -3, 15, -7, 4];

function pozitifSayilariSay(array){
    let pozitifMi = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > 0){
            pozitifMi += 1;
        };
    };
    return pozitifMi;
};

console.log(pozitifSayilariSay(pozitifSayilarDizisi));


//8
const sayiDizisi = [12, 5, 8, 21, 4, 17, 30];

function dizideVarMi(array, arananSayi){
    for(let i = 0; i < array.length; i++){
        if(arananSayi === array[i]){
            return true;
        };
    };
    return false;
};

console.log(dizideVarMi(sayiDizisi, 12));
console.log(dizideVarMi(sayiDizisi, 3));
console.log(dizideVarMi(sayiDizisi, 17));
console.log(dizideVarMi(sayiDizisi, 9));

//9
const notlar = [70, 85, 60, 90, 75];

function notOrtalamasi(array){
    let notToplam = 0;
    for(let i = 0; i < array.length; i++){
        notToplam += array[i];
    };
    return notToplam / array.length;
};

console.log(notOrtalamasi(notlar));

//10
const belirliSayilar = [5, 12, 8, 20, 3, 15, 7];

function belirliDegerdenBuyukleriTopla(array, sinir){
    let degerToplam = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > sinir){
            degerToplam += array[i];
        };
    };
    return degerToplam;
};

console.log(belirliDegerdenBuyukleriTopla(belirliSayilar, 10));

//11
const varMiDiziler = [4, 9, 13, 22, 7, 18, 30];

function belirliDegerdenBuyukIlkSayi(array, sinir){
    for(let i = 0; i < array.length; i++){
        if(array[i] > sinir){
            return array[i];
        };
    };
    return null;
};

console.log(belirliDegerdenBuyukIlkSayi(varMiDiziler, 10));
console.log(belirliDegerdenBuyukIlkSayi(varMiDiziler, 30));

//12
const sayiDizesi = [12, 5, 8, 21, 4, 17, 30, 9];

function pozitifCiftSayilarinOrtalamasi(array){
    let toplam = 0;
    let adet = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > 0){
            if(array[i] % 2 === 0){
                toplam += array[i];
                adet += 1;
            }
        } 
    }

    if(adet === 0){
        return null;
    }

    return toplam / adet; 
};

console.log(pozitifCiftSayilarinOrtalamasi(sayiDizesi))

//Hesap Makinesi:
/* let birinciSayi = Number(prompt("Lütfen ilk sayıyı girin:"));
let ikinciSayi = Number(prompt("Lütfen ikinci sayıyı girin:"));

function topla(birinciSayi, ikinciSayi){
    return birinciSayi + ikinciSayi;
};
function cikart(birinciSayi, ikinciSayi){
    return birinciSayi - ikinciSayi;
};
function carp(birinciSayi, ikinciSayi){
    return birinciSayi * ikinciSayi;
};
function bol(birinciSayi, ikinciSayi){
    return birinciSayi / ikinciSayi;
};

function hesapMakinesi(birinciSayi, ikinciSayi){

    let kullaniciİstegi = Number(prompt("Lütfen yapmak istediğiniz işlemi 1-4 arası bir numarayla seçin!"))

    switch (kullaniciİstegi) {
        case 1:
            console.log(topla(birinciSayi, ikinciSayi));
            return;
        case 2:
            console.log(cikart(birinciSayi, ikinciSayi));
            return;
        case 3:
            console.log(carp(birinciSayi, ikinciSayi));
            return;
        case 4:
            console.log(bol(birinciSayi, ikinciSayi));
            return;
        default:
            console.log("Geçersiz numara girdiniz!");
            return;
    };
};

hesapMakinesi(birinciSayi, ikinciSayi);
 */


// Function Exspress
//Normal Function
function selamla(isim){
    return `Merhaba ${isim}`;
};

//function exspress
const selamlama = function(isim){
    return `Merhaba ${isim}`;
};

console.log(selamlama("Ömür"));

// mimi alıştırma
const toplaSayi = function(sayi1, sayi2){
    return sayi1 + sayi2;
};

console.log(toplaSayi(10, 20));


//Arrow Function
const sayiToplami = (sayi1, sayi2) => {
    return sayi1 + sayi2;
};
//işte bu bir arrow functiondur.

// örnek
const carpMa = (sayi1, sayi2) => {
    return sayi1 * sayi2;
};

console.log(carpMa(5, 6));

//implicit return
const carpMa2 = (sayi1, sayi2) => sayi1 * sayi2;

console.log(carpMa2(7, 8));

//örnek
const kareAl = (sayi) => sayi*sayi;
console.log(kareAl(7));

//tek parametreyse parantezleri de kaldırabilirsin
const kareAl2 = sayi => sayi*sayi;
console.log(kareAl2(9));

//egzersiz 15
const tekMiCiftMiKontrol = (sayi) => {
    if(sayi % 2 === 0){
        return "Çift";
    } else {
        return "Tek";
    }
};

console.log(tekMiCiftMiKontrol(8));
console.log(tekMiCiftMiKontrol(7));


//Default Parameter
function hesaplaDefault(sayi1, sayi2 = 2){
    return sayi1 * sayi2;
};
console.log(hesaplaDefault(10));

//
const selamlaOrnek = (isim = "Misafir") => `Merhaba ${isim}`;

console.log(selamlaOrnek());


//Rest Parameter
const toplaOrnek = (...sayilar) => {
    let topla = 0;
    for(let i = 0; i < sayilar.length; i++){
        topla += sayilar[i];
    };
    return topla;
};

console.log(toplaOrnek(5, 7, 8));

//
const sayilar2 = [4, 12, 7, 20, 3, 16, 9];

const ciftSayilarinToplami = (...sayilar) => {
    let topla = 0;
    for(let i = 0; i < sayilar.length; i++){
        if(sayilar[i] % 2 === 0){
            topla += sayilar[i];
        }
    }
    return topla;
};

console.log(ciftSayilarinToplami(4, 7, 9, 11));
console.log(ciftSayilarinToplami(3, 5, 7));

//
const sayilar3 = [8, 3, 15, 22, 6, 11, 30];

const ilkCiftSayiyiBul = (...sayilar) => {
    let sayiAdet = 0;
    for(let i = 0; i < sayilar.length; i++){
        if(sayilar[i] % 2 === 0){
            sayiAdet += 1;
            return sayilar[i];
        };
    }
    
    if(sayiAdet == 0){
        return null;
    };
};

console.log(ilkCiftSayiyiBul(3, 7, 9, 12, 15));
console.log(ilkCiftSayiyiBul(3, 7, 9, 15));


//callback function
//geri çağırmalı fonksiyon
function sayiYazdir(sayi){
    console.log(sayi);
}

function calistir(fonksiyon){
    fonksiyon(kullaniciGirdisi);
};

/* let kullaniciGirdisi = Number(prompt("Lütfen bir sayı giriniz: "));

calistir(sayiYazdir);

//
function karesiniAl(sayi){
    return sayi * sayi;
}

function kupunuAl(sayi){
    return sayi * sayi * sayi;
}

function hesaplaAl(sayi, islem){
    return islem(sayi)
};

console.log(hesaplaAl(5, karesiniAl));
console.log(hesaplaAl(5, kupunuAl));

//
function hesapla4(sayi, islem){
    return islem(sayi);
};

let ikiyleCarp = sayi => sayi * 2;

let onEkle = sayi => sayi + 10;

console.log(hesapla4(7, ikiyleCarp));
console.log(hesapla4(7, onEkle)); */


//forEach
const sayilar5 = [2, 4, 6, 8, 10];

sayilar5.forEach(sayi => {
    console.log(sayi * sayi);
});

//map
const sayilar6 = [2, 4, 6, 8, 10];

const kareler = sayilar6.map(sayi => {
    return sayi * sayi;
});

console.log(kareler);

//
const fiyatlar = [100, 250, 500, 750, 1000];

const zamliFiyatlar = fiyatlar.map(zamsizFiyat => {
    const zamMiktari = zamsizFiyat * 0.2;
    return zamsizFiyat + zamMiktari;
});

console.log(zamliFiyatlar);


//filter
//dizideki elemanları belirli bir koşula göre seçer ve bu elemanlarla yeni bir dizi oluşturur.

const sayilar7 = [1, 2, 3, 4, 5, 6, 7, 8];

const ciftsayilar = sayilar7.filter(sayi => {
    return sayi % 2 === 0;
});

console.log(ciftsayilar); // [2, 4, 6, 8]

//
const buyuksayilar1 = [5, 12, 18, 24, 31, 7, 42];

const buyukSayilar = buyuksayilar1.filter(sayi => {
    return sayi > 18;
});

console.log(buyukSayilar);

//
const fiyatlar1 = [150, 450, 800, 1200, 250, 2000, 600];

const uygunFiyatlar = fiyatlar1.filter(fiyat => {
    return fiyat <= 500;
});

console.log(uygunFiyatlar);

//
const yaslar = [16, 24, 17, 32, 15, 28, 19, 14];

const yetiskinler = yaslar.filter(yas => {
    return yas >= 18;
});
console.log(yetiskinler);

//
const fiyatlar3 = [150, 450, 800, 1200, 250, 2000, 600, 350];
const secilenFiyatlar = fiyatlar3.filter(fiyat => {
    return fiyat >= 200 && fiyat <= 700;

});

console.log(secilenFiyatlar);

//
const fiyatlar4 = [100, 250, 500, 750, 1000];
const yuksekFiyatlar = fiyatlar4.filter(fiyat => {
    return fiyat > 300;
});

console.log(yuksekFiyatlar); // [500, 750, 1000]

const zamliFiyatlar1 = yuksekFiyatlar.map(fiyat => {
    let yeniFiyat = fiyat * 0.1;
    let zamliFiyat = yeniFiyat + fiyat;
    return zamliFiyat;
});

console.log(zamliFiyatlar1);

//zincirleme metot
const fiyatlar5 = [120, 350, 480, 750, 900, 150, 1200];

const indirimliFiyatlar1 = fiyatlar5
    .filter(fiyat => {
        return fiyat > 300;
    })
    .map(fiyat => {
        return fiyat - 50;
    });

console.log(indirimliFiyatlar1);

//
const notlar1 = [45, 72, 88, 95, 60, 50, 100];

const guncelNotlar = notlar1
    .filter(not => {
        return not >= 50;
    })
    .map(not => {
        return not + 5;
    });

console.log(guncelNotlar);

//
const urunler = [
    { isim: "Laptop", fiyat: 30000, stok: 5},
    { isim: "Telefon", fiyat: 20000, stok: 0},
    { isim: "Kulaklık", fiyat: 2000, stok: 15},
    { isim: "Klavye", fiyat: 1500, stok: 8},
    { isim: "Monitör", fiyat: 8000, stok: 0}
];

const stoktaOlanUrunler = urunler
    .filter(stok => {
        return stok.stok > 0;
    })
    .map(isim => {
        return isim.isim;
    });

console.log(stoktaOlanUrunler);

//
const urunler1 = [
    { isim: "Laptop", fiyat: 30000, stok: 5 },
    { isim: "Telefon", fiyat: 4000, stok: 3 },
    { isim: "Kulaklık", fiyat: 2000, stok: 15 },
    { isim: "Klavye", fiyat: 1500, stok: 0 },
    { isim: "Monitör", fiyat: 8000, stok: 0 }
];

const varOlanUrunler = urunler1
    .filter(urunler => {
        return urunler.stok > 0 && urunler.fiyat < 5000;
    })
    .map(urunler => {
        return urunler.isim;
    })

console.log(varOlanUrunler);

//
const urunler2 = [
    { isim: "Laptop", fiyat: 30000, stok: 5 },
    { isim: "Telefon", fiyat: 4000, stok: 3 },
    { isim: "Kulaklık", fiyat: 2000, stok: 15 },
    { isim: "Klavye", fiyat: 1500, stok: 8 },
    { isim: "Monitör", fiyat: 8000, stok: 2 }
];

const indirimliFiyatlar = urunler2
    .filter(urun => {
        return urun.stok >= 5;
    })
    .map(urun => {
        let indirim = urun.fiyat * 0.1;
        let yeniFiyatlar = urun.fiyat - indirim;
        return yeniFiyatlar;
    });

console.log(indirimliFiyatlar);

//reduce
//dizideki değerleri birleştirerek tek bir sonuç üretir

const sayilar8 = [10, 20, 30, 40];

const toplam1 = sayilar8.reduce((birikenToplam, sayi) => {
    return birikenToplam + sayi;
}, 0);

console.log(toplam1);

//
const sayilar9 = [2, 4, 6];

const toplam2 = sayilar9.reduce((toplamMiktar, islemdekiSayi) => {
    return toplamMiktar + islemdekiSayi;
}, 0);

console.log(toplam2);

//
const fiyatlar6 = [250, 400, 150, 700, 100];

const sepetToplami = fiyatlar6.reduce((toplamFiyat, fiyat) => {
    return toplamFiyat + fiyat;
}, 0);

console.log(sepetToplami);

//
const fiyatlar7 = [100, 250, 400, 600, 800, 1000];

const toplamIndirimliFiyat = fiyatlar7
    .filter(fiyat => {
        return fiyat > 300;
    })
    .map(fiyat => {
        return fiyat * 0.9;
    })
    .reduce((toplamFiyat, yeniFiyat) => {
        return toplamFiyat + yeniFiyat;
    }, 0);

console.log(toplamIndirimliFiyat);

//
const sayilar10 = [12, 45, 7, 89, 34, 56];

const enBuyukSayi = sayilar10.reduce((baslangicDegeri, sonrakiSayi) => {
    if(sonrakiSayi > baslangicDegeri){
        return sonrakiSayi;
    } else {
        return baslangicDegeri;
    }
}, sayilar10[0]);

console.log(enBuyukSayi);


//find
//belirli koşulu sağlayan ilk elemanı bulmaktır

const findSayilar = [12, 25, 8, 42, 17, 50];

const bulunanSayi = findSayilar.find(sayi => {
    return sayi > 30;
});

console.log(bulunanSayi);

//
const kullaniciIdleri = [104, 208, 315, 427, 512, 630];

const bulunanId = kullaniciIdleri.find(id => {
    return id > 300;
});

console.log(bulunanId);

//
const kullanicilar = [
    { id: 1, isim: "Ahmet", aktif: false },
    { id: 2, isim: "Ayşe", aktif: true },
    { id: 3, isim: "Mehmet", aktif: true },
    { id: 4, isim: "Zeynep", aktif: false }
];

const aktifKullanici = kullanicilar.find(durum => {
    return durum.aktif;
});

console.log(aktifKullanici);

//
const urunler3 = [
    { id: 101, isim: "Laptop", fiyat: 30000 },
    { id: 102, isim: "Telefon", fiyat: 20000 },
    { id: 103, isim: "Kulaklık", fiyat: 2000 },
    { id: 104, isim: "Klavye", fiyat: 1500 }
];

const bulunanUrun = urunler3.find(urun => {
    return urun.fiyat < 5000;
});

console.log(bulunanUrun);

//
const urunler4 = [
    { id: 101, isim: "Laptop", fiyat: 30000 },
    { id: 102, isim: "Telefon", fiyat: 20000 },
    { id: 103, isim: "Kulaklık", fiyat: 2000 },
    { id: 104, isim: "Klavye", fiyat: 1500 }
];

const uygunUrunler = urunler4
    .filter(urun => {
        return urun.fiyat < 25000;
    });

console.log(uygunUrunler);


//findIndex
//ilk eşlenen elemanın indeksini döndürür

const urunler5 = [
    { id: 101, isim: "Laptop", fiyat: 30000 },
    { id: 102, isim: "Telefon", fiyat: 20000 },
    { id: 103, isim: "Kulaklık", fiyat: 2000 },
    { id: 104, isim: "Klavye", fiyat: 1500 }
];

const uygunUrunIndex = urunler5.findIndex(urun => {
    return urun.fiyat < 25000;
});

console.log(uygunUrunIndex);


//some
//bir dizide en az bir eleman koşulu sağlıyor mu diye kontrol eder

const urunler6 = [
    { isim: "Laptop", fiyat: 30000 },
    { isim: "Telefon", fiyat: 20000 },
    { isim: "Kulaklık", fiyat: 2000 }
];

const pahaliUrunVarMi = urunler6.some(urun => {
    return urun.fiyat > 25000;
});

console.log(pahaliUrunVarMi);

//every
//bütün elemanlar koşulu sağlıyor mu?
const fiyatlar8 = [1500, 2500, 4000];

const sonuc = fiyatlar8.every(urun => {
    return urun > 1000;
});

console.log(sonuc);

//sort
//dizileri sıralar ama sayısal büyüklüklere göre değil metin gibi karşılaştırarak sıralar

const sayilar11 = [100, 5, 20, 3];

console.log(sayilar11.sort());

//artan sıralama için (a, b) => a - b
console.log(sayilar11.sort((a, b) => a - b));
//[3, 5, 20, 100]

//azalan sıralama için (a, b) => b - a
console.log(sayilar11.sort((a, b) => b - a));
//[100, 20, 5, 3]


//
const fiyatlar9 = [1299, 499, 7500, 250, 1999];

console.log(fiyatlar9.sort((a, b) => a - b));

//
const urunler7 = [
    { isim: "Laptop", fiyat: 30000 },
    { isim: "Kulaklık", fiyat: 2000 },
    { isim: "Telefon", fiyat: 20000 }
];

const siralanmisFiyatlar = urunler7.sort((a, b) => {
    return a.fiyat - b.fiyat;
});

console.log(siralanmisFiyatlar);


