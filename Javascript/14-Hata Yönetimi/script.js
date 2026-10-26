//Error Handling

// try = hata verebilecek kodlar

// catch () = hata meydana gelirse bu blok çalışacak

// finally

try {
    let firstName = "Tayfun"
    let lastName = "erbilen"
    let fullName = firstName + " " + surname
} catch (e) {
    console.log(e.name)
    console.log(e.message)
    console.table(e)
} 


//throw

const throwFunction = () => {
    let message;
    let x = prompt("Bir sayı giriniz: ");
    try{
        if (x == "") throw "empty";
        if (isNaN(x)) throw "Not a Number";
        x = Number(x);
        if (x < 5) throw "too low";
        if (x > 10) throw "too high";
    } catch (err) {
        console.log(err);
    }
}

throwFunction();

let age = prompt("Yaşınız kaç: ");

try{
    if (age > 29) throw new Error("Yalan Söylüyorsun")
} catch (e) {
    alert("Yaşınız hakkında söyledikleriniz yalan!")
}


//Error Types

//reference error
/* let isim = "ali"
let soyisim = "kuru"
let tamisim = isim + soyad */

/* //syntaxerror
console.log(5 x 5); //yazım hatası */

/* //typeerror
let yas = 10
console.log(
    yas.toUpperCase()
) */