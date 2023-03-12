const buton = document.getElementById("randombuton");
const siir = document.getElementById("yazdır");

const siirler = [
  { name: "Bir Kalbiniz Vardır. Onu Tanıyınız.", yazar: "A.Cahit Zarifoğlu" },
  { name: "İstanbul'u Dinliyorum Gözlerim Kapalı.", yazar: "Orhan Veli Kanık" },
  { name: "Biliyorum Sana Giden Yollar Kapalı.", yazar: "Cemal Süreya" },
];
console.log(siirler);

buton.addEventListener("click", siirGetir);
function siirGetir() {
  let random = Math.floor(Math.random() * siirler.length);
  siir.textContent = `Şair Adı: ${siirler[random].yazar} 
  Alıntı:  ${siirler[random].name} `;
  console.log(siirler[random]);
}
