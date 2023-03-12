//* DOM Yapısı

//! Açılımı Docment Object Model'den gelmektedir. HTML Sayfalarımızda döküman içerisinde bulunan objelerimize (body, head, h1) kolay erişim sağlanması ve üzerinde işlemler yapılarak manipüle edilmesini sağlayan yapıdır.
//! DOM vasıtasıyla HTML sayfamızda bulunan her şeye erişim sağlayabiliriz.
//! HTML etiketi dahil tüm etiketler ve tüm elementlerin kapsayıcısı document modelidir. Bu yapıdaki hiyararşinin en ucu HTML ile başlar. Sonra head ve body olarak ayrılırlar ve bunlar da kendi içerisinde ayrılırlar. Yani aynı segmentte bulunabildikleri gibi parent ve child olma özellikleri de vardır.

//! Node kavramı burada devreye girmektedir. (Düğüm)

//! <head><head/>
//! <body><body/>

//! HTML içindeki bütün elementler birer düğümdür. Yukarıdaki head ve body gibi. Bu iki düğüm HTML düğümü yani node'u altında bulundukları için HTML node'nun çocuklarıdır. Aynı tag ya da aynı düğüm tabi oldukları içinde birbirlerinin kardeşleridir.

// console.log(document);
// console.dir(document);
// console.dir(document.domain);
// console.dir(document.title);

//! JS dosyası üzerinden değeri html sayfası içinde verilmiş olan title tagine erişip değerlerini atayabildik.
// document.title = 304;
// console.dir(Document.title);

// console.log(document.all[10]);

//! document modelimizin içinde bulunan all isimli birimde index numaraları verilmiş halde sayfamızda tasarlamış olduğumuz bütün elementlerimiz bulunmaktadır. Bu elemente index numarası vasıtasıyla erişip içerisinde bulunan yazıyı textContetnt metodu ile değiştirebilmekteyiz.
// document.all[10].textContent = "Objeler";

// console.log(document.forms);

//! Dökümanımızın içinde bulunan elementlere bu elementlere ait id numaraları vasıtasıyla nasıl erişmekteyiz.

let headerTitle = document.getElementById("header-baslik");
console.log(headerTitle);

// headerTitle.textContent = "JS DOM Maniplasyonu";

// headerTitle.innerText = "js dom maniplasyonu2";
// headerTitle.innerText = headerTitle.innerText + " Yanına Yazar";

//! innerText ile textContent arasında ki fark textContent ile kullanıcı arayüzünde gözükmeyen yazılarda erişilebilir haldedir. Fakat innerText kullanımdasadece kullanıcı arayüzünde görünen text ifadelerine erişim sağlayabiliriz.
console.log(headerTitle.textContent);
console.log(headerTitle.innerText);

//?----------------------------------------------------------------------------------------------------------------------------------------
//* Peki inner HTML Nedir?
headerTitle.innerHTML = '<h2 class="text-danger"> JS DOM Maiplasyonu <h2/>';
headerTitle.innerHTML += "<h3/>İkinci Başlık<h3/>";

headerTitle.style.borderBottom = "5px solid springgreen";
headerTitle.style.padding = "0 10px";
headerTitle.style.fontWeight = 700;

//?----------------------------------------------------------------------------------------------------------------------------------------
//* Class isimlerine göre element erişimi
let nesneler = document.getElementsByClassName("list-group-item");
console.log(nesneler);
console.log(nesneler[1]);

for (let index = 0; index < nesneler.length; index++) {
  nesneler[index].style.backgroundColor = "darkgray";
}

nesneler[1].style.backgroundColor = "red";
nesneler[1].style.color = "white";
nesneler[1].style.fontWeight = "bold";
nesneler[1].style.borderBottom = "2px solid black";

//?----------------------------------------------------------------------------------------------------------------------------------------
//* Tag name'lere göre elementleri çağırma
//! Direkt olarak istenen element adı da aratılarak getelementsByTagName kullanımı bile bir collection şeklinde sıralanarak getirilecektir.
var liItems = document.getElementsByTagName("li");
console.log(liItems);

for (let index = 0; index < liItems.length; index++) {
  liItems[index].style.fontWeight = "bold";
}

//?----------------------------------------------------------------------------------------------------------------------------------------
//* QUERY SELECTOR

var baslik = document.querySelector(".main-title");
console.log(baslik);

var baslik1 = document.querySelector("#ana-header");
console.log(baslik1);

baslik1.style.border = "2px solid orange";

let veriGiris = document.querySelector("input");
console.log(veriGiris);
veriGiris.placeholder = "Buraya Yazınız.";
// veriGiris.value = "html dom öğreniyorum";

var buton = document.querySelector('input[type="submit"]');
console.log(buton);
buton.value = "Yolla";

//* Tekli nesne çağırımı
var nesne1 = document.querySelector(".list-group-item");
console.log(nesne1);

//* Son nesne çağırımı
var nesne5 = document.querySelector(".list-group-item:last-child");
console.log(nesne5);

//* İkinci nesne çağırımı
var nesne2 = document.querySelector(".list-group-item:nth-child(2)");
console.log(nesne2);

//?----------------------------------------------------------------------------------------------------------------------------------------

//* QUERY SEKECTOR ALL
var biseyler = document.querySelectorAll(".main-title");
console.log(biseyler);

var nesnelerFull = document.querySelectorAll(".list-group-item");
console.log(nesnelerFull);

var tekler = document.querySelectorAll("li:nth-child(odd)");
console.log(tekler);

var ciftler = document.querySelectorAll("li:nth-child(even)");
console.log(ciftler);

for (let index = 0; index < tekler.length; index++) {
  tekler[index].style.backgroundColor = "red";
}
for (let index = 0; index < ciftler.length; index++) {
  ciftler[index].style.backgroundColor = "yellow";
}

//?----------------------------------------------------------------------------------------------------------------------------------------

//* ÇOCUK-EBEVEYN
var nesneListe = document.querySelector("#nesneler");
console.log(nesneListe);

//! ParentNode özelliği bize mevcut elementi kapsayan üst ebeveyn elemente erişim sağlamamızı sağlamaktadır.
console.log(nesneListe.parentNode);
nesneListe.parentNode.style.backgroundColor = "orange";

//! childNodes kullanımı ile de alt elementlere erişim sağlıyoruz. Fakat v-burada sadece elementler değil içerisindeki textler de bizlere sunulmaktadır. O yüzden doğru index numarası kullanımı ile doğrudan elemente erişim sağlayabiliriz.
console.log(nesneListe.childNodes);
//! ilk alt elementi de firstElementChild kullanarak doğrudan çağırabiliyoruz.
// console.log(nesneListe.firstChild);
// console.log(nesneListe.firstElementChild);
// nesneListe.lastElementChild.textContent = "Selam Ben Nesne";

console.log(nesneListe.nextElementSibling);
console.log(nesneListe.previousElementSibling);

//?----------------------------------------------------------------------------------------------------------------------------------------

//* YENİ ELEMENT OLUŞTURMA
let yeniDiv = document.createElement("div");

//dive id verme
yeniDiv.id = "yeniDivID";

//özellik - Attribute ekleme
yeniDiv.setAttribute("baslik", "yeniDivAtteDeger");

var yeviDivText = document.createTextNode("Selamlar Ben Yeni Div");

// Yeni Div'e yeni text'i atamak
yeniDiv.appendChild(yeviDivText);
console.log(yeniDiv);

//!eğer belli bir alandan önce ekleme yapmak istiyorsak insert before komutu ile ekleme yapabiliyoruz.
var konteynir = document.querySelector("header .container");
console.log(konteynir);

//! Fakat ilgili alanın içindeki en son elementten sonra bir element eklemesi yapacaksak appendChild'ı kullanıyoruz.
var headerh2 = document.querySelector("header h2");
konteynir.insertBefore(yeniDiv, headerh2);
konteynir.appendChild(yeniDiv);

//?----------------------------------------------------------------------------------------------------------------------------------------

// Eventler.click eventi
var Buton = document.querySelector("#buton").addEventListener("click", tiklama);
function tiklama() {
  document.getElementById("header-baslik").textContent = "Tıklama Eventi";
  document.getElementById("main").style.backgroundColor = "blueviolet";
}

// var secim = document.querySelector("select");
// secim.addEventListener("change", olay);
// function olay(e) {
//   console.log(e.target.value);
// }

// var input1 = document.querySelector("#nesne");
// input1.addEventListener("change", olay);

// var kutu = document.querySelector("#kutu");
// var cikis = document.querySelector("#cikis");
// kutu.addEventListener("mouseenter", mousefunc);
// kutu.addEventListener("mouseover", mousefunc);
// kutu.addEventListener("mouseout", mousefunc);
// kutu.addEventListener("mousemove", mousefunc);
// function mousefunc(e) {
//   console.log("Olayımız " + e.type);
//   cikis.innerHTML = `<h3>X Ekseni: ${e.offsetX}</h3><h3>Y Ekseni: ${e.offsetY}</h3>`;
// }
