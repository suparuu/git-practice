$("body").prepend("<header>");
$("body").append("<footer>");

$("header").load("../inc.html header>.top", head);
$("footer").load("../inc.html footer>div");
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
/* const Img02 = document.querySelector(".img02"),//제주라거 글씨 이미지
  Img03 = document.querySelector(".img03"),//제주라거 맥주 이미지
  Img04 = document.querySelector(".img04"),//위트에일 글씨 이미지
  Img05 = document.querySelector(".img05"),//위트에일 맥주 이미지
  Img06 = document.querySelector(".img06"),//펠롱에일 글씨 이미지
  Img07 = document.querySelector(".img07"),//펠롱에일 맥주 이미지
  Img08 = document.querySelector(".img08"),//거멍에일 글씨 이미지
  Img09 = document.querySelector(".img09"),//거멍에일 맥주 이미지
  Textbox02 = document.querySelector('.textbox02'),//제주라거 텍스트
  Textbox03 = document.querySelector('.textbox03'),//위트에일 텍스트
  Textbox04 = document.querySelector('.textbox04'),//펠롱에일 텍스트
  Textbox05 = document.querySelector('.textbox05');//거멍에일 텍스트


  function ScrollEvent(){
    let Screen = window.innerHeight ;
    if(Img02.offsetTop - Screen < window.scrollY){
      Img02.classList.add('on')
    }
    if(Img03.offsetTop - Screen < window.scrollY){
      Img03.classList.add('on')
      Textbox02.classList.add('on')
    }
    if(Img04.offsetTop - Screen < window.scrollY){
      Img04.classList.add('on')
    }
    if(Img05.offsetTop - Screen < window.scrollY){
      Img05.classList.add('on')
      Textbox03.classList.add('on')
    }
    if(Img06.offsetTop - Screen < window.scrollY){
      Img06.classList.add('on')
    }
    if(Img07.offsetTop - Screen < window.scrollY){
      Img07.classList.add('on')
      Textbox04.classList.add('on')
    }
    if(Img08.offsetTop - Screen < window.scrollY){
      Img08.classList.add('on')
    }
    if(Img09.offsetTop - Screen < window.scrollY){
      Img09.classList.add('on')
      Textbox05.classList.add('on')
    }
    console.log(window.innerHeight)
  } */
const Img01 = document.querySelectorAll(".animation01"),//글씨 이미지
      Img02 = document.querySelectorAll(".animation02"),//맥주 이미지
      Textbox01 = document.querySelectorAll(".animation03");//텍스트

function ScrollEvent() {
  let Screen = window.innerHeight;
  Img01.forEach(function (a, key) {
    if (Img01[key].offsetTop - Screen < window.scrollY) {
      Img01[key].classList.add("on");
    }
  });
  Img02.forEach(function (a, key) {
    if(Img02[key].offsetTop - Screen < window.scrollY){
      Img02[key].classList.add('on');
    }
  });
  Textbox01.forEach(function (a, key) {
    if(Textbox01[key].offsetTop - Screen < window.scrollY){
      Textbox01[key].classList.add('on');
    }
  });
}

window.addEventListener("scroll", ScrollEvent); // ㅁ.offsetTop - Screen < window.pageYoffset
