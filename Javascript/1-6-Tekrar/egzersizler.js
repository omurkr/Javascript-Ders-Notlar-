/* //1) Sayı Analizi

/* let girilenSayi = Number(prompt("Lütfen bir sayı girin:"));
if(girilenSayi > 0){
    console.log("Sayı Pozitif!");
} else if(girilenSayi < 0){
    console.log("Sayı Negatif!");
}else if (girilenSayi === 0){
    console.log("Girilen Sayı Sıfır!");
}else{
    console.log("Hatalı İşlem!");
} */

//2) Çift/Tek
/*
let istenilenSayi = Number(prompt("Lütfen Sayı Girin!"));
if(istenilenSayi % 2 === 0){
    console.log("Girilen Sayı Çifttir");
}else if(istenilenSayi % 2 !== 0){
    console.log("Girilen Sayı Tektir!");
}else{
    console.log("Hatalı İşlem!");
}

//3) Arraydeki Sayıları Topla

const number = [4, 7, 2, 9, 12];
let toplam = 0;

for (let sayi = 0; sayi < number.length; sayi++) {
  toplam += number[sayi];
}
console.log(toplam);

//4) En büyük sayıyı bul
const sayiDizisi = [12, 45, 7, 89, 23, 56];
let enBuyukSayi = sayiDizisi[0];
for (let i = 1; i < sayiDizisi.length; i++) {
  if (sayiDizisi[i] > enBuyukSayi) {
    enBuyukSayi = sayiDizisi[i];
  }
}
console.log(enBuyukSayi);

//5) 10'dan büyük bulma
const eldekiSayilar = [3, 8, 12, 5, 19, 2, 14, 7];
for (let s = 0; s < eldekiSayilar.length; s++) {
  if (eldekiSayilar[s] > 10) {
    console.log(eldekiSayilar[s]);
  }
}

//6) Çift sayıları bulma
const ciftSayilar = [4, 7, 2, 9, 12, 15, 6, 20];
let toplamSonuc = 0;
for (let cift = 0; cift < ciftSayilar.length; cift++) {
  if (ciftSayilar[cift] % 2 == 0) {
    toplamSonuc += 1;
  }
}
console.log(toplamSonuc);

//7) En küçük sayıyı bul
const enkucuksayiarray = [34, 12, 56, 7, 89, 23, 4];
let enKucukSayi = enkucuksayiarray[0];
for (let k = 1; k < enkucuksayiarray.length; k++) {
  if (enKucukSayi > enkucuksayiarray[k]) {
    enKucukSayi = enkucuksayiarray[k];
  }
}
console.log(enKucukSayi);

//8) Arama
/* const isimlerArray = ["Ahmet", "Mehmet", "Ayşe", "Zeynep", "Ali"];

let istenenIsim = prompt("Lütfen isim giriniz: ");

if (isimlerArray.includes(`${istenenIsim}`)) {
  console.log("İsim Bulundu!");
} else {
  console.log("İsim Bulunamadı!");
};

//9) Alışveriş Sepeti
const sepet = [120, 45, 300, 80, 25];
let urunToplam = 0;
for(let urun = 0; urun < sepet.length; urun++){
    urunToplam += sepet[urun];
};
console.log(urunToplam);


//10) Not Ortalaması
const notlar = [70, 85, 60, 90, 75];
let notlarinToplami = 0;
for(let not = 0; not < notlar.length; not++){
    notlarinToplami += notlar[not];
}
let ortalama = notlarinToplami / notlar.length;
console.log(ortalama);

//11) Belirli Notları Bul
const vizeNotlari = [45, 72, 38, 90, 65, 51, 30, 84];
for(let vize =0; vize < vizeNotlari.length; vize++){
    if(vizeNotlari[vize] >= 50){
        console.log(vizeNotlari[vize]);
    };
};

//12) Kaç Kişi Geçti
const sinavNotlari = [25, 68, 92, 41, 77, 54, 29, 85];
let sayac = 0;

for(let sinavNotu = 0; sinavNotu < sinavNotlari.length; sinavNotu++){
    if(sinavNotlari[sinavNotu] >= 50){
        sayac += 1;
    };
};
console.log(sayac);


//13) Çift Sayıların Toplamı
const ciftsayilar = [3, 8, 12, 5, 7, 20, 14, 9];
let toplamCiftSayilar = 0;
for(let ciftmi = 0; ciftmi < ciftsayilar.length; ciftmi++){
    if(ciftsayilar[ciftmi] % 2 == 0){
        toplamCiftSayilar += ciftsayilar[ciftmi];
    };
};
console.log(toplamCiftSayilar);

//14) Uygun Değeri Bul
const degerliSayilar = [3, 7, 4, 11, 6, 18, 9];
for(let buyukSayi = 0; buyukSayi < degerliSayilar.length; buyukSayi++){
    if(degerliSayilar[buyukSayi] > 10){
        console.log(degerliSayilar[buyukSayi]);
        break;
    };
};


//15) Olup Olmadığını Kontrol Et
const karisikSayilar = [4, 7, 12, 9, 15, 22, 31];
let varMi = karisikSayilar.includes(22);
if(varMi === true){
    console.log("22 Bulundu!");
}else{
    console.log("22 Bulunamadı!");
};

//16) İlk While Seçimi
let girdi = Number(prompt("Lütfen bir sayı girin:"));
while(girdi > 0){
    girdi = Number(prompt("Lütfen bir sayı girin:"));
    if(girdi === 0){
        console.log("Program Sonlandırıldı!");
    };
}; */

// EGZERSİZ 4

/* const sayiDizisi = [4, 7, 12, 9, 15, 22, 31];
let kullaniciIstegi = Number(prompt("Lütfen bir sayı giriniz:"));

if(sayiDizisi.includes(kullaniciIstegi)){
    console.log(`${kullaniciIstegi} bulundu!`);
}else{
    console.log(`${kullaniciIstegi} bulunamadı!`);
};
 */

// EGZERSİZ 5
/* const kullanicidanAlinanString = prompt("Lütfen bir kelime/cümle giriniz!");
const kucukHarfeDonustur = kullanicidanAlinanString.toLocaleLowerCase();

if(kucukHarfeDonustur.includes("javascript")){
    console.log("JavaScript bulundu!");
}else{
    console.log("JavaScript bulunamadı!");
};

//daha kısa hali
const kullanicininGirdigiMetin = prompt("Lütfen bir kelime/cümle giriniz!");
if(kullanicininGirdigiMetin.toLocaleLowerCase().includes("javascript")){
    console.log("JavaScript bulundu!");
}else{
    console.log("JavaScript bulunamadı!");
}; */

/* // EGZERSİZ 6
let olusturulanSayi = Math.random() * 100;
let yukariYuvarlanmisSayi = Math.floor(olusturulanSayi + 1);
let kullanicininGirdigiSayi = Number(prompt("Lütfen bir sayı giriniz:"));
if(kullanicininGirdigiSayi > yukariYuvarlanmisSayi){
    console.log("Tahmininiz büyük!");
}else if(kullanicininGirdigiSayi < yukariYuvarlanmisSayi){
    console.log("Tahmininiz küçük!");
}else{
    console.log("Tebrikler, doğru tahmin!");
}; */

/* //EGZERSİZ 7
let secim = Number(prompt("Lütfen 1-4 arasında bir sayı seçiniz!"));

switch(secim){
    case 1:
        console.log("Ana Sayfa");
        break;
    case 2:
        console.log("Profil");
        break;
    case 3:
        console.log("Ayarlar");
        break;
    case 4:
        console.log("Çıkış");
        break;
    default:
        console.log("Geçersiz Seçim!");
}
 */

//EGZERSİZ 8
/* let devam = true;
while (devam) {
  let kullaniciGirdisi = Number(
    prompt("Lütfen bir sayı giriniz! (Çıkmak için 0'a basınız!)"),
  );

  switch (kullaniciGirdisi) {
    case 1:
      console.log("Merhaba!");
      break;
    case 2:
      console.log("Program Hakkında Bilgi!");
      break;
    case 3:
      console.log("Bugün güzel bir gün!");
      break;
    case 0:
      devam = false;
      console.log("Program sonlandırıldı!");
      break;
    default:
      console.log("Hatalı İşlem!");
      break;
  }
} */

/* //EGZERSİZ 9
while(true){
    let kullaniciGirdisi = Number(prompt("Lütfen bir sayı girin!"));
    if(kullaniciGirdisi > 0){
        console.log("Pozitif Sayı!");
    }else if(kullaniciGirdisi === 0){
        console.log("Program Bitti!");
        break;
    }else{
        console.log("Negatif Sayı!");
    }
}
 */

//EGZERSİZ 10

/* const dogruSifre = 1234;
while(true){
    let kullaniciSifresi = Number(prompt("Lütfen bir şifre giriniz!"));
    if(kullaniciSifresi === dogruSifre){
        console.log("Giriş Başarılı!");
        break;
    }else{
        console.log("Hatalı Şifre!");
    }
}
 */

/* //EGZERSİZ 11

let toplamPozitifSayi = 0;
while(true){
    let kullanicidanAlinanSayi = Number(prompt("Lütfen bir sayı girin!"));

    if(kullanicidanAlinanSayi > 0){
        toplamPozitifSayi += kullanicidanAlinanSayi;
    }else if(kullanicidanAlinanSayi === 0){
        break;
    }else{
        console.log("Negatif sayı, hesaba katılmadı!");
        continue;
    }
}
console.log(toplamPozitifSayi); */

//EGZERSİZ 12

/* let devam = true;
while(devam){
    let kullaniciGirdisi = Number(prompt("Lütfen işlem için bir sayı giriniz!"));

    switch(kullaniciGirdisi){
        case 1:
            console.log("Profil Açıldı.");
            break;
        case 2:
            console.log("Ayarlar Açıldı.");
            break;
        case 3:
            console.log("Yardım Açıldı.");
            break;
        case 0:
            console.log("Program Kapatıldı.");
            devam = false;
            break;
        default:
            console.log("Geçersiz Seçim!");
    }
}
*/

/* while(true){
    let kullaniciGirdisi = Number(prompt("Lütfen işlem için bir sayı giriniz!"));
    switch(kullaniciGirdisi){
        case 1:
            console.log("Profil Açıldı");
            break;
        case 2:
            console.log("Ayarlar Açıldı");
            break;
        case 3:
            console.log("Yardım Açıldı");
            break;
        case 0:
            console.log("Program Kapatıldı!");
            break;
    }
    if(kullaniciGirdisi === 0){
        break;
    }
} */

/* let sayac = 0;
while(true){
    let kullaniciGirdisi = Number(prompt("Lütfen bir sayı girin!"));
    if(kullaniciGirdisi > 0){
        console.log("Pozitif");
        sayac += 1;
    }else if(kullaniciGirdisi === 0){
        console.log("Program bitti!");
        break;
    }else{
        console.log("Negatif, atlandı!");
        continue;
    }
}
console.log(sayac); */


//EGZERSİZ 13

/* let bakiye = 1000;

while(true){
    console.log("İşlemler:\n1 -> Bakiye Görüntüle\n2 -> Para Yatır\n3 -> Para Çek\n0 -> Çıkış!");
    let islem = Number(prompt("Lütfen yapmak istediğiniz işlemi seçin:"));

    switch(islem){
        case 1:
            console.log(bakiye);
            break;
        case 2:
            let eklenecekPara = Number(prompt(("Lütfen yatırmak istediğiniz miktarı girin:")));
            bakiye += eklenecekPara;
            break;
        case 3:
            let cikarilacakPara = Number(prompt("Lütfen çekmek istediğiniz miktarı girin!"));
            if(cikarilacakPara > bakiye){
                console.log("Yetersiz Bakiye");
                break;
            }else{
                bakiye -= cikarilacakPara;
                break;
            }
        case 0:
            console.log("Çıkış Yapıldı!");
            break;
        default:
            console.log("Geçersiz İşlem!");
    }

    if(islem === 0){
        break;
    }
}
console.log(bakiye); */


//EGZERSİZ 14

/* const sayilarDizisi = [12, 5, 8, 21, 4, 17, 30];
let islemSirasi = 0;

while(true){
    if(sayilarDizisi[islemSirasi] > 20){
        console.log(sayilarDizisi[islemSirasi]);
        islemSirasi++;
    }else{
        islemSirasi++;
    };

    if(islemSirasi == sayilarDizisi.length){
        break;
    };
}
 */


//EGZERSİZ 15

/* const sayilarDizisi = [12, 5, 8, 21, 4, 17, 30];
let diziSirasi = 0;
toplam = 0;

while(true){
    if(sayilarDizisi[diziSirasi] % 2 == 0){
        toplam += sayilarDizisi[diziSirasi];
        diziSirasi++;
    }else{
        diziSirasi++;
    }
    if(diziSirasi == sayilarDizisi.length){
        break;
    }
}
console.log(toplam);
 */

//EGZERSİZ 16
/* 
const sayilarDizisi = [7, 13, 9, 15, 22, 8, 30];
let diziSirasi = 0;

while(true){
    if(sayilarDizisi[diziSirasi] % 2 === 0){
        console.log(sayilarDizisi[diziSirasi]);
        diziSirasi++;
        break;
    }else{
        diziSirasi++;
    }
} */


//EGZERSİZ 17

/* const sayilarDizisi = [3, 8, 11, 14, 7, 20, 5, 18];
let diziSirasi = 0;

while(diziSirasi < sayilarDizisi.length){
    if(sayilarDizisi[diziSirasi] % 2 === 0){
        diziSirasi++;
        continue;
    }
    console.log(sayilarDizisi[diziSirasi]);
    diziSirasi++;
} */
/* 
const sayiDizisi = [12, 7, 4, 19, 8, 3, 22, 15];
let tekSayiAdeti = 0;
let ciftSayiAdeti = 0;
let diziSirasi = 0;

while(diziSirasi < sayiDizisi.length){
    if(sayiDizisi[diziSirasi] % 2 == 0){
        ciftSayiAdeti += 1;
        diziSirasi++;
    }else{
        tekSayiAdeti += 1;
        diziSirasi++;
    }
}
console.log("Tek Sayı Adeti:", tekSayiAdeti);
console.log("Çift Sayı Adeti:", ciftSayiAdeti); */


