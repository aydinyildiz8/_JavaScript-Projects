// Fonksiyonlar (fuctions)

// 1.Dönüş Değeri Olmayan Ve Parametre Almayan Fonksiyonlar

// function selamlama() {
//   window.alert("Hoşgeldiniz.");
// }
// selamlama();

// 2.Dönüş Değeri Olmayan Ve Parametre Alan Fonksiyonlar

// Parametre değerlerini istersek eşittir koyup tipini de kavramasını sağlayabiliriz. Eğer tip belirlemezsek aşağıdaki işlemleri yine de uygulayacaktır. Yeter ki içerisine parametre eklemiş olalım.
// Parametrelere fonksiyon oluşturma sırasında eşittir diyip verdiğimiz değerler default değerlerdir. Yani fonksiyonu çağırdığımızda hiçbir değer vermezsek bile parametrelere, yine de çalışır ve içerisindeki default değerler üzerindeen fonksiyon içerisindeki işlemleri gerçekleştirir.
// function SayıGöster(sayi1 = 0, sayi2 = 0) {
//   window.alert(sayi1 + sayi2);
// }
// SayıGöster(5 + 2);

// function SayıGöster1(sayi1, sayi2) {
//   window.alert(sayi1 + sayi2);
// }
// SayıGöster1(3, 2);

var a = parseInt(prompt("Birinci Sayıyı Giriniz: "));
var b = parseInt(prompt("İkinci Sayıyı Giriniz: "));

function toplama(x, y) {
  window.alert(x + y);
}
toplama(a, b);

function toplama1() {
  var num1 = parseInt(prompt("Birinci Sayıyı Giriniz: "));
  var num2 = parseInt(prompt("İkinci Sayıyı Giriniz: "));
  window.alert(num1 + num2);
}
toplama1();
