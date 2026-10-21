//Array

//Array()
let names = Array();
console.log(names);

// []
let names2 = [];
console.log(names2);

let array = ["Anıl", 23, 1993, "Kuru", undefined, null];
console.log(array);
console.log(array.length); //6

let js = "JavaScript";
console.log(js.split("")); //bir diziye dönüşüyor = ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
console.log(js[1]); //a


//Modify Array
const numbers = [1, 2, 3, 4, 5];
numbers[0] = 10;
numbers[2] = 30;
console.log(numbers); //[10, 2, 30, 4, 5]
//const olmasına rağmen değiştirilebilir, burada değişkeni değil içeriğindeki sayıyı değiştiriyoruz.


//Methods to manipulate

//Array()
let empty = Array(8);
console.log(empty); //[empty × 8]


//fill
let emptyFill = Array(5).fill("Loading");
console.log(emptyFill); //['Loading', 'Loading', 'Loading', 'Loading', 'Loading'] -> fill kullanarak içerisini doldurabiliriz.


//concat
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = [7, 8, 9];
const topList = firstList.concat(secondList);
console.log(topList); //[1, 2, 3, 4, 5, 6]
const allList = thirdList.concat([10, 11, 12], secondList, firstList);
console.log(allList); //[7, 8, 9, 10, 11, 12, 4, 5, 6, 1, 2, 3]


//indexOf
const besliSayilar = [1, 2, 3, 4, 5];
console.log(besliSayilar.indexOf(3)); //2 -> yani 2. indekste var
console.log(besliSayilar.indexOf(0)); //-1 -> yani yok o yüzden -1


//lastindexOff
const yeniSayilar = [1, 2, 1, 4, 5, 6, 2, 1];
console.log(yeniSayilar.lastIndexOf(2)); //6 -> en sondan başlayarak istenilen sayının sondan hangi indexte olduğunu bulur. index sıralaması baştan başlar.


//includes
const varMiYokMu = ["ali", "Sertap", 2, 4, "Yavuz"];
console.log(varMiYokMu.includes("ali")); //true
console.log(varMiYokMu.includes("sertap")); //false - case sensitivy


//array.isarray
const arrayMi = [1, 2, 3, 4, 5];
const degilMi = "anıl";
console.log(Array.isArray(arrayMi)); //true
console.log(Array.isArray(degilMi)); //false
const parcalanmis = degilMi.split();
console.log(Array.isArray(parcalanmis)); //true = split string ifadeyi parçalayarak diziye döndürüyor


//toString
const stringeDondur = ["Anıl", "Yavuz", "Ahmet"];
console.log(stringeDondur.toString()); //Anıl,Yavuz,Ahmet


//join
const yeniArray = ["Ali", "Yavuz", "Mehmet"];
console.log(yeniArray.join("-")); //Ali-Yavuz-Mehmet ifadeleri neyle/nasıl birleştireceğini gösteriyor.


//slice
const sliceArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(sliceArray.slice(0,4)); //[1, 2, 3, 4]


//splice
const spliceArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(spliceArray.splice()); //[] -> hepsini siler
console.log(spliceArray.splice(3, 3, "x", "y", "z"));
console.log(spliceArray); // [1, 2, 3, 'x', 'y', 'z', 7, 8] -> aslında silmeden ziyade istenilenleri çıkartma - ekleme mantığı var.


//push
const pushArray = [1, 2, 3, 4, 5];
console.log(pushArray.push("sayilar"));
console.log(pushArray); //[1, 2, 3, 4, 5, 'sayilar'] -> sona eleman ekler


//pop
const popArray = [1, 2, 3, 4, 5];
let sonDeger = popArray.pop();
console.log(sonDeger); //5 -> elemanı diziden çıkarıyor kullanmak istersem diye de bir değişkene atayabiliyiroum
console.log(popArray); //[1, 2, 3, 4]


//shift
const shiftArray = [1, 2, 3, 4, 5];
let degismisDeger = shiftArray.shift();
console.log(degismisDeger); //1 -> ilk elemanı çıkartır
console.log(shiftArray); //[2, 3, 4, 5]


//unshift
const unShiftArray = [1, 2, 3, 4, 5];
console.log(unShiftArray.unshift("Ali"));
console.log(unShiftArray); //['Ali', 1, 2, 3, 4, 5]


//reverse
const reverseArray = [1, 2, 3, 4, 5];
console.log(reverseArray.reverse()); //[5, 4, 3, 2, 1]

let isim = "Ömürhan";
let tersisim = isim.split("").reverse().join("")
console.log(tersisim);


//sort
const sortArray = [4, 1, 3, 5, 7, 2];
console.log(sortArray.sort()); //[1, 2, 3, 4, 5, 7] -> sıralamaya sokar


//array to array
const arrayToArray =  [4, 10, 1, [10, 2, 7], 8]; //[4, 10, 1, Array(3), 8]
console.log(arrayToArray[3][1]); //2 -> bu şekilde dizi içerisindeki dizilere ulaşabiliriz.