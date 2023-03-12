//? Senkronize Programlama

// selamlama();
// window.alert("Senkronize Programlama");

// const x = 5;
// const y = 12;
// console.log(x + y);

// function selamlama() {
//   console.log("Hoşgeldiniz.");
// }

// console.log("Selamlar");
// const senkronize = () => {
//   console.log("Benim Adım Aydın");
// };

// senkronize();

//! Asenkronize çalışmaya giden yol daha doğrusu neden asenkron çalışmak zorundayız.

// console.log("Şimdi uzun süreçli bir bekleme işlemii yapıyoruz.");
// const asenkronize = () => {
//   setTimeout(() => {
//     console.log("Benim Adım Aydın");
//   }, 5000);
// };

// asenkronize();
// console.log("Nasılsın");

// İşte bu gibi durumlarda cevap geç gelecek olan işlemler yapılırken undefined sonuçlar almamak adına kod bloklarımızı asenkron çalıştırmamız gerekmektedir. Bunun için async ve await keyworlerini kullanacağınız. Ya da fetchleme yaparken .then .then diyerek işlemleri sıraya sokacağız.

document.getElementById("yaziGetir").addEventListener("click", yaziGetir);
// function yaziGetir() {
//   fetch("./yazi.txt")
//     .then(function (yaziDosyasi) {
//       return yaziDosyasi.text();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// }

// function yaziGetir() {
//   fetch("./yazi.txt")
//     .then((res) => res.text())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

function yaziGetir() {
  fetch("./yazi.txt")
    .then((param1) => param1.text())
    .then((param2) => (document.getElementById("cikti").innerText = param2))
    .catch((err) => console.log(err));
}

document
  .getElementById("calisanGetir")
  .addEventListener("click", calisanGetirFunc);
// function calisanGetir() {
//   fetch("./employees.json")
//     .then((param3) => param3.json())
//     .then((param4) => console.log(param4))
//     .catch((err) => console.log(err));
// }

function calisanGetirFunc() {
  fetch("./employees.json")
    .then((param3) => param3.json())
    .then((param4) => {
      let cikti = '<h1 class="text-danger" >Çalışan Listemiz</h1>';
      param4.map(
        (calisan) =>
        (cikti += `
        
        <ul style = "text-decoration:none" >
        <li> Id: ${calisan.id} </li>
        <li> İsim: ${calisan.name} </li>
        <li> Soyisim: ${calisan.surname} </li>
        <li> Mail: ${calisan.email} </li>
        </ul>
        `)
      );
      document.getElementById("cikti").innerHTML = cikti;
    });
}

document.getElementById("apiGetir").addEventListener("click", apiGetirFunc);
function apiGetirFunc() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((param5) => param5.json())
    .then((veri) => {
      console.log(veri);
      let output = '<h1 class="text-danger" >Gönderiler</h1>';
      veri.map(
        (api) =>
        (output += `
          <div class="bg-dark text-warning>
          <h3>${api.title}</h3>
          <p>${api.body}</p>
          </div>
          `)
      );
      document.getElementById("cikti").innerHTML = output;
    });
}
//form elementimize eriştik ve event ( olay ) olarak form elementindeki submit işlemini seçtik. Submit gerçekleştiği anda gonderi oluştur adında bir fonksiyon çalıştırdık. Bu fonksiyonu çalıştırırken ilk işlem olarak varsayılan tarayıcı davranışından kaçındık (preventDefault) bunu yapmasaydık gönderimizi oluşuramadan sayfayı yenileyeceği için verimizi tutamayacaktık. sonra başlık ve içerik için birer tanımlama yaptık. ve bu inputlara girdiğimiz değeri okuyabilmek için .value dedik ve girmiş olduğumuz verileri tuttuk.
// sonra post işlemi gerçekleştirmek için yine fetch metodunu çalıştırdık. fakat bu sefer get metodunu kullanmayacağımız için ikincil prametre olarak fetch'in metodunu tanımladık. Bu kısım sabittir internetten erişebilirsiniz. , koyduktan sonra method: "POST" yazıyoruz, headers bölümünü yazıyoruz(değiştirmeden), ve body kısmında post edilecek veri her ne ise onu belirtmemiz gerekiyor yani body demek post edilecek şey demektir.(bizdeki başlık ve post kısmı göndereceğimiz veriler olduğu için bodye bunları yazıyoruz.) Fakat önemli olan kısım şu ki, göndereceğimiz API'da bu iki verinin nereye ekleneceğini yani hangi özelliği dolduracağını belirtmeniz gerekiyor. yani bu örnekte gönderi başlığı API üzerinde title olark tanımlandığı için biz de title: baslik dedik yine gönderi içeriği body olarak tanımlandığı için biz de body: post dedik. bu noktadan sonra gerisi standart then.then diyerek devam eden kısımdır.

document
  .getElementById("gonderiOlustur")
  .addEventListener("submit", gonderiOlusturFunc);

function gonderiOlusturFunc(e) {
  e.preventDefault();
  let baslik = document.getElementById("title").value;
  let post = document.getElementById("body").value;

  console.log(baslik);
  console.log(post);

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json", },
    body: JSON.stringify({ title: baslik, body: post }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
