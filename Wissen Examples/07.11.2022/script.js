// console.log("s.a.");
// window.alert("S.A.");
// prompt("yazın");

// Yorum Satırı
/* Çoklu Yorum Satırı*/

// örnek yazımızı yazdık (CTRL-K-C / CTRL-K-U)

// Data Tipleri;
// Underfined, string, boolean, Number, object, null

// Değişken Tanımlama;
// vari let ve const

// const pi = 3.14;
// console.log(pi);

// var Number = prompt("Bir Sayı Giriniz");
// console.log(Number);
// window.alert(`Girmiş Olduğunuz Sayı ${Number}`);
// console.log("Girmiş Olduğunuz Sayı: " + Number);
// var mesaj = "Girmiş Olduğunuz Sayı: " + Number;
// console.log(mesaj);

var name = "Aydın";
var surname = "YILDIZ";
var age = 29;
const sabit = 8;
console.log(name, surname, age, sabit);

var name = "Emre";
var surname = "YILDIZ";
var age = 24;
// const sabit = 7;
var name = "Kağan";
var surname = "Aslan";

//Değişken atamaları yapılırken  başında kullanmış olduğumuz tip yani (var, let, const) arasında belli farklar bulunmaktadır. Const sabit ifadeler için kullanılmaktadır. Daha sonra değeri değiştirilemez. Let ve Var arasındaki şuan bildiğimiz fark üst kod bloklarında var ile tipi belirtilen bir değişken ataması yapıldıktan sonra alt bloklarda tekrar var ön ekiyle aynı değişkene yeni bir değer atabiliyorken aynı işlem let ile gerçekleştirilemez. Yani örneğin üst kodları let ve x=5; denildikten sonra alt kodlarda let x=10 diyemezsiniz.Bunun yerine tıpkı c#'taki gibi x=10; diyerek değerini güncellemiş oluruz.
// let age = 25;
console.log(name, surname, age, sabit);

//Değişken Oluşturma Yöntemleri;
//Değişken oluşturulurken değer atamak.
var x = 5;

//Değişkeni oluşturup değeri daha sonra da atayabiliyoruz.
var y;
let z;
console.log(x);
console.log(y);

//önceden ram bellekte tanıtımını yapmış olduğumuz y değişkeninin alt satırlarda değer atayabiliyoruz.
y = 25;
z = y;
console.log(x, y, z);

z = 6;
f = "6";
console.log(typeof z, typeof f);

//Eşitlik kontrollerinde karar yapıları gibi kullanımlarda eşittir işareti üç eşittir ve iki eşittir olarak kullanılır. İki eşittir kullanımı yapıldığı zaman değer string de olsa number da olsa aynı datatyı veriyorsa eşit kabul edilir. Fakat kontrol üç eşittir ifadesiyle sağlanıyorsa tipleri farklı değer aynı ise false döner yani eşitlik sağlanmaz.
console.log(z == f);
console.log(z === f);

// JS Case Sensitive büyük küçük harf duyarlıdır.
// let hocaninAdi = "Barbaros";
// console.log(hocaninadi); //output alamayız. Hata verir.

//Değişken Oluşturma Kuralları
// let 2x =15;
// Değişken isminin başında rakam kullanılmaz. Sonunda veya içinde kullanılabilir.
let x2 = 15;

//Özel ifadeler de aynı şekilde kullanılmaz. Yalnızca _ kullanılabilir.

// Örnek bool tipinde değer atama
let tenefüs20DakikaMi = true;
let isAdmin = false;

const kisiler = ["Ahmet", "Mehmet", "Fikret", "Saffet", "Erdem", "Adem", 35];
console.log(kisiler);
console.log(typeof kisiler);

// document.getElementById("deneme").innerHTML = "<h3>Aydın<h3/>";

//Matematiksel Operatörler
var k = 10;
let m = 22;
var toplam = 15 + 26;
console.log(toplam);
toplam1 = m + k;
console.log(toplam1);
console.log(k + m);

console.log(m - k);
console.log(m / k);
console.log(m * k);
console.log(k ** 2);
console.log(k % 10);

k++;
console.log(k);
console.log((k = k + 1));

const ondalikli = 5.18;
console.log(ondalikli);

var mesaj =
  "Merhaba Wissen 304 sınıfında Full Stack Web Development Eğitimi Verilmektedir.";
console.log(mesaj);

let mesaj2 =
  'Merhaba "Wissen 304" sınıfında Full Stack Web Development Eğitimi Verilmektedir.';
console.log(mesaj2);

let mesaj3 = `Merhaba "Wissen 304"sınıfında Full Stack Web Development Eğitimi Verilmektedir.`;
console.log(mesaj3);

var mesaj4 =
  "Merhaba 'Wissen 304' sınıfında Full Stack Web Development Eğitimi Verilmektedir.";
console.log(mesaj4);

var stringifade = <a href="www.google.com"></a>;
console.log(stringifade);
var stringifade2 = `<a href=\"www.google.com\"></a>`;
console.log(stringifade2);

// "\t"  Bir tab kadar boşluk verir.
// "\n"  Bir satır aşağıya iner.

// String concatination--String birleştirme
// 1-Plus Operator
var adim = "Aydın";
var soyadim = "Yıldız";
var fullName = adim + soyadim;
console.log(fullName);

var mesajim =
  "Merhaba" +
  " " +
  "Benim Adım ve Soyadım " +
  adim +
  " " +
  soyadim +
  " Memnun Oldum.";
console.log(mesajim);

let baslangic = "Selam ";
let final = "Ben Aydın";
baslangic += final;
console.log(baslangic);

console.log(baslangic.length);
console.log(baslangic[0]);
console.log(baslangic[baslangic.length - 1]);

// Stringlerdeki immutable meselesi

// string ifadelerde ifade doğrudan değiştirilebilir. Fakat index numarasına erişip bunu değiştirmeye müsade etmez.
var yaziliMetin = "Seda Sever Bize Mandalina Uzattı";
yaziliMetin = "Sefa Sever Bize Mandalina Uzattı";
console.log(yaziliMetin);
yaziliMetin[2] = "d";
console.log(yaziliMetin);

// Arrays

//söz dizimi bildiğimiz şekildedir.

const arabalar = ["BMW", "Mercedes", "Saab"];
console.log(arabalar[1]);

const myArray = [
  ["Barbaros", 30],
  ["Seda", 24],
  ["Kağan", 25],
  ["Selin", 25],
];

console.log(myArray);
console.log(myArray[2][0]);
console.log(typeof myArray[2][0]);

const myArray3 = [
  [
    ["Barbaros", "Ciga", 30],
    ["Kağan", "Aslan", 25],
    ["Selin", "Bayatlı", 24],
    ["Seda", "Sever", 24],
  ],
  [
    ["İzmir", 35],
    ["Sinop", 57],
    ["Çorum", 19],
    ["Rize", 53],
  ],
];
console.log(myArray3);
console.log(myArray3[1][1][1]); //57'yi verir.

// Array Metotları
// Diziye Eleman Ekleme

var dizi = ["Muhittin", "Sucul", "Elmas", "Kalpazan"];
console.log(dizi);
dizi.push("Müzik");
console.log(dizi);
dizi[0] = "Fazıl";
console.log(dizi);

//Eleman Silme
let dizi1 = [1, 2, 3, 4, 5];
console.log(dizi1);
dizi1.pop();
console.log(dizi1);

// İlk Elemanı Silme
dizi1.shift();
console.log(dizi1);

let dizi3 = ["Ali Rıza", "Ferhunde", "Şevket", "Leyla", "Necla", "Oğuz"];
console.log(dizi3);

//Birinci elemanı değiştirme
dizi3.unshift("Mesut Komiser");

// Dizi index numaralarını terse çevirme
dizi3.reverse();
console.log(dizi3);
// Diziyi sıralama(alfanumerik)
dizi3.sort();
console.log(dizi3);

console.log(dizi3);
// Delete komutu index numarasını sabit tutar. Yalnız içindeki değeri siler.Dolayısıyla sadece o indexe erişim sağlamaya çalışıldığında içerik olarak undefined alırız. Bütün diziyi çalıştırırsak o bölgenin boş olduğuı gözükür.
delete dizi3[0];
console.log(dizi3);

// Array Concatination--Array Birleştirme
var dizi4 = ["Muz", "Portakal"];
var dizi5 = ["Elma", "Kamkat"];
var dizi6 = ["Karpuz", "Kavun"];

const newDizi = dizi4.concat(dizi5);
console.log(newDizi);

// Array Merge

const newArray1 = dizi4.concat(dizi5, dizi6);
console.log(newArray1);

// Splice Metodu

//splice metodu ile dizide istediğimiz index numarasından itibaren başlayıp eleman ekleme işlemlerini gerçekleştirebilmekteyiz.Bunun için önce ekleyeceğimiz içeriğin eklenecek dizideki index numarasını giriyoruz. İkince parametre olarak eklenecek diziden kaç eleman silineceğini belirtiyoruz. Sonra da ekleyeceğimiz elemanları yazıyoruz.

const array7 = ["Sabıka", "Huzurevi", "Üzüm", "Kitap", "Ümit Besen"];
console.log(array7);
array7.splice(2, 0, "Fırtına", "Örümcek Adam");
console.log(array7);

array7.splice(2, 1);
console.log(array7);

//------------------------------------------------------------------------------------------------------------------------------
// String Metotları

var str1 = "Aydın Yıldız";
let str2 = "      aydnyldz8@gmail.com          ";
let str3 = "Wissen Akademi wissen 304 sınıf full stack developer eğtimi.";

var num1 = 457;
console.log(str1);
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(num1.toString());
console.log(str1.length);
console.log(str1.slice(3, 6));
console.log(str1.slice(4));
console.log(str1.slice(-5));
console.log(array7.toString());
console.log(array7.toString().replaceAll(",", " "));
console.log(str2.trimEnd());
console.log(str2.trimStart());
console.log(str2.trim());
console.log(str3.split(" "));
console.log(str3.indexOf("full"));
console.log(str3.lastIndexOf("a"));
console.log(str3.search("ıf"));
console.log(str3.substring(13));
console.log(str3.substring(13, 20));
console.log(str3.substr(13, 15));
console.log(str3.endsWith("."));
console.log(str3.startsWith("."));
console.log(str3.includes("sen"));
console.log(str3.repeat(2));
console.log(str3.replace("wissen", "WİSSEN"));
