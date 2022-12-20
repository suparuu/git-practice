$("body").prepend("<header>");
$("body").append("<footer>");

$("header").load("./inc.html header", head);
$("footer").load("./inc.html footer");
history.scrollRestoration = "manual";
const Ani01 = document.querySelector(".subtitle01"),
  Ani02 = document.querySelector(".subtitle02"),
  Ani03 = document.querySelector(".subtitle03"),
  Ani04 = document.querySelector(".subtitle04");

let idx = localStorage.idx;
function head() {
  $(".head01 a").eq(idx).addClass("on");
  $(".head01 a").click(function () {
    let idx = $(this).index();
    localStorage.idx = idx;
  });
  $(".img01 a img").click(function () {
    $(".head01 a").remove("on");
  });
  localStorage.clear();
}

const Img01 = document.querySelectorAll(".animation01"), //글씨 이미지
  Img02 = document.querySelectorAll(".animation02"), //맥주 이미지
  Textbox01 = document.querySelectorAll(".animation03"); //텍스트

function ScrollEvent() {
  let Screen = window.innerHeight;
  Img01.forEach(function (a, key) {
    if (Img01[key].offsetTop - Screen < window.scrollY) {
      Img01[key].classList.add("on");
    }
  });
  Img02.forEach(function (a, key) {
    if (Img02[key].offsetTop - Screen < window.scrollY) {
      Img02[key].classList.add("on");
    }
  });
  Textbox01.forEach(function (a, key) {
    if (Textbox01[key].offsetTop - Screen < window.scrollY) {
      Textbox01[key].classList.add("on");
    }
  });
}

window.addEventListener("scroll", ScrollEvent); // ㅁ.offsetTop - Screen < window.pageYoffset
