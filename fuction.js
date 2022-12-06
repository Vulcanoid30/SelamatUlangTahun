var musik = "Musik satu.mp3";
var background = "Foto satu.jpg";
var ucapanSurat =
  "Selamat ulang tahun yah sayang maaf cuman bisa kasih gini 😂 aku sayang kamu kok aku harap perasaan kamu ke aku tidak berubah aku jujur nggak terlalu jago bikin kata-kata romantis tapi yang aku bilang tadi itu tulus dari hati, harapanku untuk ulang tahun kali ini jangan sering marah-marah nanti cantiknya hilang lagi, terus aku mau nanya sayang mau Disney+ nggak?";
var pesanWhatsapp = "Iyah Sayang makasih";

var audio = document.querySelector(".audio");
var bg = document.querySelector(".bg");
var isiSurat = document.querySelector(".pesan");
audio.src = musik;
bg.style = "background-image: url('" + background + "')";
function tampil() {
  document.querySelector(".card").style =
    "transition: 0.5s all ease;transform: scale(0);opacity: 0;";
  audio.play();
  setTimeout(typeWriter, 1000);
  setTimeout(function () {
    document.querySelector(".content2").style.display = "block";
  }, 400);
}
var i = 0;
var speed = 100;
isiSurat.value = "";
function typeWriter() {
  if (i < ucapanSurat.length) {
    isiSurat.value += ucapanSurat.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    document.querySelector(".wa").style.display = "block";
  }
}
var content = document.querySelector(".content");
var cpr = document.querySelector(".cpr").innerHTML;
if (cpr != "Jeluga") {
  content.style.display = "none";
}
function balasWA() {
  window.open(
    // "https://api.whatsapp.com/send?text=" + pesanWhatsapp,
    // "6282296831858"
    "https://api.whatsapp.com/send/?phone=6282296831858&text =" + pesanWhatsapp,
    "&type=phone_number&app_absent=0"
  );
}
