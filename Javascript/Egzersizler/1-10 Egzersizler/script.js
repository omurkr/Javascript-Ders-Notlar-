// -- EGZERSİZLER -- //

// 
const siparisler = [
    {
        id: 1,
        musteri: "Ahmet",
        tutar: 2500,
        durum: "tamamlandi",
        urunAdedi: 3
    },
    {
        id: 2,
        musteri: "Ayşe",
        tutar: 1200,
        durum: "bekliyor",
        urunAdedi: 1
    },
    {
        id: 3,
        musteri: "Mehmet",
        tutar: 4800,
        durum: "tamamlandi",
        urunAdedi: 5
    },
    {
        id: 4,
        musteri: "Zeynep",
        tutar: 900,
        durum: "iptal",
        urunAdedi: 2
    },
    {
        id: 5,
        musteri: "Can",
        tutar: 3200,
        durum: "tamamlandi",
        urunAdedi: 4
    }
];

// for-of döngüsü
for(const siparis of siparisler){
    console.log(siparis.musteri, siparis.tutar);

    if(siparis.durum.toLowerCase() === "tamamlandi"){
        console.log("Sipariş Tamamlandı");
    } else {
        console.log("Sipariş henüz tamamlanmadı");
    };
};

//filter
const tamamlananSiparisler = siparisler.filter(siparis => {
    return siparis.durum.toLowerCase() === "tamamlandi";
});

console.log(tamamlananSiparisler);

//map
const siparisRaporu = tamamlananSiparisler.map(siparis => {
    return ({
        musteri: siparis.musteri,
        tutar: siparis.tutar
    });
});

console.log(siparisRaporu)

//reduce
const toplamTutar = siparisRaporu.reduce((birikenToplam, mevcutToplam) => {
    return birikenToplam + mevcutToplam;
}, 0);

console.log(toplamTutar);