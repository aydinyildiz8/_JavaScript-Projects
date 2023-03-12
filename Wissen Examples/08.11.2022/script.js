//? Date Methots
var tarih = new Date();
console.log(tarih);

console.log(tarih.getDay());

var days = [
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
  "Pazar",
];
console.log(days[tarih.getDay()]);

//getMount ile aldığımız sonuç 0-11 arasında bir number döndürür. Bu yüzden bulunduğumuz ayın gösterilmesi için üzerine bir ekleme gerekebilir.
console.log(tarih.getMonth() + 1);
console.log(tarih.getHours());
console.log(tarih.getFullYear());
console.log(tarih.getMinutes());
console.log(tarih.getSeconds());
console.log(tarih.getTime());

var months = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];
console.log(months[tarih.getMonth()]);
console.log("Yine Aylardan " + months[tarih.getMonth()]);

const d = new Date("2025,10,15");
console.log(d);

var d2 = new Date("September 05,2022 16:00:19");
console.log(d2);

var d3 = new Date(2022, 10, 27, 10, 45, 35);
console.log(d3);

const year = tarih.getFullYear();
const mounth = (tarih.getMonth() + 1).toString();
const day = tarih.getDate();
const saat = tarih.getHours();
const dakika = tarih.getMinutes();
const saniye = tarih.getSeconds();
var goster = `${day}/${mounth}/${year} || ${saat}:${dakika};${saniye}`;
console.log(goster);

//?Math Methods

// stringe dönüştürme
var num = 5;
console.log(num.toString());
// toFixed komutu ondalıklı kısmı yuvarlar girilen parametre kadar olan bir kısmı gönderir.
var num1 = 50.456;
console.log(num1.toFixed());
console.log(num1.toFixed(1));
console.log(num1.toFixed(2));
//toPrecision ile tam sayı kısmı da dahil olarak parametre kadar kısım gösterir.
var num2 = 30.456;
console.log(num2.toPrecision(3));

console.log(Number("10a"));
// floor her zaman aşağıya yuvarlar.
console.log(Math.floor(2.6));
// round metodu ondalık rakam 5'ten büyükse yukarı, küçükse aşağıya yuvarlar.
console.log(Math.round(2.6));
// ceil metotu her zaman yukarı yuvarlar.
console.log(Math.ceil(2.1));
// mutlak değer
console.log(Math.abs(-500));

// 20(dahil) ile 100(dahil) arasındaki değerler
console.log(Math.floor(Math.random() * (100 - 20 + 1) + 20));

console.log(5 ** 2);
console.log(Math.pow(5, 2));
console.log(Math.min(5, -7, 100, 55));
