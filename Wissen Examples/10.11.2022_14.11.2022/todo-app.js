var formumuz = document.querySelector("#ekle");
// console.log(formumuz);
var ul = document.querySelector("#nesneler");
ul.addEventListener("click", silmefunc);

formumuz.addEventListener("submit", kaydet);
function kaydet(e) {
  //tarayıcının submit işlemi yapılırkenki default yani varsayılan ayarlarından kaçınmak için preventDefault özelliğini kullandık.
  e.preventDefault();
  //nesne id'sine sahip olan veri girişi yaptığımız inputa erişim sağladık. .Value diyerek input içerisine yazılmış olan değeri newItem ismiyle tuttuk.
  var newItem = document.getElementById("nesne").value;
  console.log(newItem);
  //yeni bir li elemanı oluşturmak için ilk adım olan liItem nesnesini oluşturduk.
  var liItem = document.createElement("li");
  //yeni oşuşturulacak olan li nesnemize class ataması yapıyoruz.
  liItem.className = "list-group-item";
  console.log(liItem);
  //şimdi newItem'ımızı liItem'ın içerisine yollamamız gerekiyor. AppendChild deyip akabinde sadece newItem'ı içerisinde yolladığımız zaman bir node hatası almaktayız. Bunun çözümü için appendChikd dedikten sonra document.createTextNode diyerek yeni text değerimizi ilgili li elementinin içerisine eklemiş olduk.
  //   liItem.appendChild(document.createTextNode(newItem));
  liItem.textContent = newItem;

  var silmeButon = document.createElement("button");
  silmeButon.className = "btn btn-danger float-end delete";
  silmeButon.innerText = "X";
  liItem.appendChild(silmeButon);
  console.log(liItem);

  ul.appendChild(liItem);
}

//* Silme Kısmı
function silmefunc(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Emin Misiniz?")) {
      var liItem = e.target.parentElement;
      console.log(liItem);
      ul.removeChild(liItem);
    }
  }
}
