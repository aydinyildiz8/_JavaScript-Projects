const calisan = {
  isim: "Aydın",
  soyisim: "Yıldız",
  yas: 29,
  adres: {
    mahalle: "kocatepe mah.",
    sokak: "14.sokak",
    ilce: "Bayrampaşa",
    il: "İstanbul",
    ülke: "Türkiye",
  },
  yetenekler: ["gitar", "davul", "santranç"],
};

console.log(calisan);
console.log(calisan.isim);
console.log(
  `Çalışanımızın Adı: ${calisan.isim} Soyadı: ${calisan.soyisim} ve Yaşı: ${calisan.yas} `
);
console.log(calisan.yetenekler[2]);
console.log(calisan.adres.ilce);

// Destruct Etme
const {
  isim,
  yas,
  adres: { il },
} = calisan;
console.log(isim, yas, il);

calisan.email = "aydmyldz8@gmail.com";
console.log(calisan);

const rockGruplari = [
  {
    id: 1,
    name: "Metallica",
    desc: `Trash Metal`,
    concertInTurkey: false,
  },
  {
    id: 2,
    name: "koRn",
    desc: `Nu Metal`,
    concertInTurkey: true,
  },
  {
    id: 3,
    name: "Disturbed",
    desc: `Nu Metal`,
    concertInTurkey: false,
  },
  {
    id: 4,
    name: "Bilind Guardian",
    desc: `Power Metal`,
    concertInTurkey: true,
  },
];

console.log(rockGruplari);
console.log(rockGruplari[3].name);

// Object formatı JSON formatına çok benzeyen bir yapıdadır. API'lar genellikle JSON formatında yazıldığı için bizim de verilerimizi çekerken ya da gönderirken objeclerimizi json formatına convert etmemiz dönüştürmemiz çevirmemiz gerekebilir. Bunu yapmak için JSON.stringify özelliğini kullanmaktayız.
const rockGruplariJson = JSON.stringify(rockGruplari);
console.log(rockGruplariJson);
