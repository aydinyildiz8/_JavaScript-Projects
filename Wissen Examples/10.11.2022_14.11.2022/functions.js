//* Parametre Alan ve Dönüş Değeri Alan

function sayilariGöster(sayi1 = 0, sayi2 = 0) {
  return sayi1 + sayi2;
}

console.log(sayilariGöster());

// Bir fonksiyon return değeri alıyorsa artık return sonucu olarak ifade ettiği değere eşit olur. Yani sonucunda bir operasyon değil bir sonuç döner. Bu sonucu kullanmak istiyorsak ya bir değişkene atayıp işlem yaptırırız ya da console log ile ekranda gösteririz.

var fct = sayilariGöster(4, 5);
console.log(fct);
// Bir değişken fonksiyonlara eşitlendiğinde artık fonksiyon gibi davranmaya başlar. Yani tekrar çağrıldığında casting operatörü de eklememiz gerekir. Eğer parametre alacaksa buraya yazılır.
var fct1 = function sayilariGöster1(sayi3 = 0, sayi4 = 0) {
  return sayi3 + sayi4;
};

console.log(fct1(5, 9));

const sayiToplama = () => {
  return;
};

//* 1. Yazım: Lambda opereatörü kullanarak arrow fuction şeklinde yazım tekniği 1
const sayiToplama1 = (param1 = 0, param2 = 0) => {
  return param1 + param2;
};
console.log(sayiToplama1(7, 16));

//* 2. Yazım: Lambda opereatörü kullanarak arrow fuction şeklinde yazım tekniği 2
const sayiToplama2 = (num3 = 0, num4 = 0) => num3 + num4;
console.log(sayiToplama2(2, 6));

//* Functionları Constructor Olarak Kullanma
function Human(isim, soyisim, yas, cinsiyet) {
  this.isim = isim;
  this.soyisim = soyisim;
  this.yas = yas;
  this.cinsiyet = cinsiyet;
}

const human1 = new Human("Aydın", "Yıldız", "29", "Erkek");
const human2 = new Human("Emre", "Yıldız", "24", "Erkek");

console.log(human1);

function Cars(model, marka, vites, renk) {
  this.model = model;
  this.marka = marka;
  this.vites = vites;
  this.renk = renk;
}
const car1 = new Cars("2022 Corsa", "Opel", "Otomatik", "Kırmızı");
console.log(car1);

var ehliyetVarmi = true;

function ehliyetKontrol() {
  var ehliyetVarmi = false;
  console.log(ehliyetVarmi);
  console.log(this.ehliyetVarmi);
}
console.log(`Bu da Dışarıda this kullanımı sonucu: ${this.ehliyetVarmi}`);
ehliyetKontrol();
