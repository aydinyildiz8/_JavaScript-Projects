// const yas = 15;

// if (yas > 10) {
//   console.log("Yaşınız 10'dan Büyüktür.");
// } else {
//   console.log("Yaşınız 10'dan Küçültür.");
// }

// if (yas > 10 && yas < 20) {
//   console.log("Yaşınız 10'dan Büyük,20'den küçüktür.");
// } else if (yas > 20) {
//   console.log("Yaşınız 20'den Büyüktür.");
// } else {
//   console.log("Yaşınız 10'dan Küçüktür.");
// }

// var vizeNotu = prompt("Vize Notunuzu Giriniz: ");
// var finalNotu = prompt("Final Notunuzu Giriniz: ");

// var ortalama = vizeNotu * 0.4 + finalNotu * 0.6;

// if (ortalama >= 45) {
//   window.alert("Tebrikler Geçtiniz.");
// } else {
//   window.alert("Üzgünüm Kaldınız.");
// }

// const age = parseInt(prompt("Lütfen yaşınızı giriniz"));

//  if (age < 18) {
//   window.alert("Büyü de gel!");
//   } else {
//    var licence = prompt("Ehliyetin var mı?");
//    var ehliyet = licence.toLowerCase();
//   if (ehliyet == "evet") {
//      window.alert(
//        "Araba sürmenizde bir sakınca yoktur. Muayeneleri ihmal etmeyelim. Cezası bayağı bir para"
//      );
//    } else {
//      window.alert(
//       "Araba kullanabilmek istiorsanız önce ehliyet alınız. Şuan sadece yolcu koltuğunda bir yeriniz var."
//     );
//    }
//   }


  let zodiac = prompt("Lütfen burcunuzu giriniz");

switch (zodiac) {
  case "Koç":
  case "Aslan":
    window.alert("Karizmatik olurlar.");
    break;
  case "Akrep":
    window.alert("Hisleriniz çok kuvvetli");
    break;
  case "Yengeç":
    window.alert("Evcimensiniz.");
    break;
  case "Kova":
    window.alert("Özgürlükçüsünüz");
    break;
  case "İkizler":
    window.alert("Tuttuğunu koparıyosun");
    break;
  case "Boğa":
    window.alert("Hırslısınız");
    break;
  default:
    window.alert("Lütfen gereksiz şeyler yazmayınız.");
    break;
}
