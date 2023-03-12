// Döngüler(Loops)

// For Döngüsü
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// For (let başlatıcı değer = değer; koşul; işlem){kod blokları işlemler vs.}

// var y = prompt("Lütfen Tekrarlanması Gereken Metni Giriniz: ");
// var x = prompt("Lütfen Tekrar Sayısını Giriniz: ");

// for (let index = 0; index < x; index++) {
//   window.alert(y);
//   console.log(y);
// }

// for (let index = 0; index < 100; index++) {
//   if (index % 3 === 0) {
//     console.log(index);
//   }
// }

// var arr = [];
// for (let index = 0; index < 100; index++) {
//   if (index % 3 == 0) {
//     arr.push(index);
//   }
// }
// window.alert(arr);

//?BOM SORUSU;
var bom = prompt("Bom Kat Sayısını Belirleyiniz: ");

var pcSkor = 0;
var userSkor = 0;
for (let index = 0; index <= 14; index++) {
  if (index % 2 == 0) {
    if (index % bom == 0) {
      window.alert("PC: BOOOMMM");
      pcSkor = pcSkor + 1;
    } else {
      window.alert(`PC: ${index}`);
    }
  } else if (index % 2 == 1) {
    var kullanıcı = prompt("Bir Sayı Giriniz:");
    if (kullanıcı == index) {
      if (kullanıcı % bom == 0) {
        window.alert("USER: BOOOOMMM");
        userSkor = userSkor + 1;
      } else {
        window.alert(`USER: ${kullanıcı}`);
      }
    } else {
      window.alert("Sayı Sırasına Uyarak Oynayınız.");
      break;
    }
  }
}
if (pcSkor > userSkor) {
  window.alert(`Üzgünüm KAYBETTİNİZ.
    PC: ${pcSkor} - ${userSkor} :USER`);
} else if (pcSkor < userSkor) {
  window.alert(`Tebrikler KAZANDINIZ.
    PC: ${pcSkor} - ${userSkor} :USER`);
} else {
  window.alert(`Berabere Kaldınız.
    PC: ${pcSkor} - ${userSkor} :USER`);
}

// While-Do While

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// while (true) {
//   var x = prompt("Lütfen Bir Sayı Giriniz");
//   if (x < 10) {
//     window.alert("Sayı 10'dan Küçük");
//     var cikis = prompt("Çıkmak İstiyor Musunuz?").toLowerCase();
//     if (cikis == "evet") {
//       break;
//     }
//   } else {
//     window.alert("Sayı 10'dan büyük veya eşit");
//     var cikis = prompt("Çıkmak İstiyor Musunuz?").toLowerCase();
//     if (cikis == "evet") {
//       break;
//     }
//   }
// }

// do {
//   console.log(i);
// } while (i < 10);

const islemler = [
  {
    id: 1,
    islem: "Uyan",
    yapildimi: true,
  },
  {
    id: 2,
    islem: "Kahvaltı Yap",
    yapildimi: true,
  },
  {
    id: 3,
    islem: "Derse Gir",
    yapildimi: true,
  },
  {
    id: 4,
    islem: "Öğle Yemeği Ye",
    yapildimi: false,
  },
];

//iterasyonel bir for kullanımı

for (let x of islemler) {
  console.log(x);
}

for (let x of islemler) {
  console.log(x.yapildimi);
}

// ForEach Döngüsü
// Foreach döngüsü kullanılarak fonksiyonel döngü işlemleri yapma imkanımız bulunmaktadır. Burada dikkat etmemiz gereken konu functiona parametre olarak girdiğimiz hayali değeri function scope'u içerisinde geri çağrmaktadır (callback). BU işleme call back denir ve böylece döngü döndüğü sürece function çalışır.

islemler.forEach(function (islem) {
  console.log(islem.islem);
});

//Map: map işlemi tıpkı foreach gibi döngüsel olarak kullanmamıza yarar. Foreachten farkı bize bir return değeri verebilmesidir.

const islemlerIslem = islemler.map(function (todo) {
  return todo.islem;
});
console.log(islemlerIslem);

// Filter: filter işlemi belirttiğimiz seçeneklere göre ilgili datadan istediğimiz özelliklere göre yeni bir array döndürür.

const todoList = islemler.filter(function (todo) {
  return todo.yapildimi === true;
});
console.log(todoList);

const todoList1 = islemler
  .filter(function (todo) {
    return todo.yapildimi === true;
  })
  .map(function (todo1) {
    return todo1.id;
  });
console.log(todoList1);

islemler.forEach(function (mahmut) {
  console.log(mahmut.islem);
});

islemler.forEach((mahmut1) => console.log(mahmut1.islem));
islemler.map((mahmut2) => console.log(mahmut2));
