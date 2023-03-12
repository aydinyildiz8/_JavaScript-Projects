$("document").ready(function () {
  $("body").append("<h1>JQuery Denemesine Hoşgeldiniz.</h1>");
  //   $("h2:first").css("border", "3px dotted black");
  //   $("h2:nth(1),h2:last").css("border", "3px dotted black");
  $("h2:first,h2:last")
    .css("border", "3px dotted black")
    .css("border", "3px dotted black")
    .css("fontsize", "30px")
    .css("color", "red");

  $("#uyari").on("click", alertFunc);
  var user = "Aydın";
  function alertFunc() {
    // window.alert("Butona Basıldı.");
    swal("Good job!", "You clicked the button!", "success");

    if (user == "Aydın") {
      swal({
        title: "Success",
        text: `Hoşgeldiniz ${user}`,
        icon: "success",
        button: "Devam Et",
      });
    } else {
      swal({
        title: "Wrong User",
        text: "You click the button",
        icon: "warning",
        button: "Yeniden Dene",
      });
    }

    $("body").css({
      backgroundColor: "yellow",
      fontSize: "50px",
      color: "orange",
      fontWeight: "bold",
      border: "10px solid purple",
    });
  }
});

$("#renkDegis").on("click", renkDegisFunc);
function renkDegisFunc() {
  $("body").css("backgroundColor", "blue");
}
