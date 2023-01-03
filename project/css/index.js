$("body").prepend("<header>");
$("body").append("<footer>");

$("header").load("./inc.html header> div");
$("footer").load("./inc.html footer> div");

const elMain = document.querySelector("main"),
  elBtn = document.querySelector(".btn"),
  elBtn01 = document.querySelectorAll(".btn01"),
  elBtn02 = document.querySelectorAll(".btn02"),
  elBtn03 = document.querySelectorAll(".btn03");

console.log(window.innerHeight);
$(".btn").click(function () {
  elMain.style = `transform:translateY(-${window.innerHeight}px)`;
  $(".first-banner").addClass("fadeout"); //첫번째 섹션 사라지는 이벤트
  console.log("asd");
}); //첫번째 버튼 클릭시 아래 스크롤

elBtn01.forEach(function (div, key) {
  div.addEventListener("click", function () {
    elMain.style = `transform:translateY(-${window.innerHeight * 2}px)`;
    $(".second-banner").addClass("fadeout"); //두번째 섹션 사라지는 이벤트
  });
}); //두번째 버튼들 클릭시 아래 스크롤
elBtn02.forEach(function (div, key) {
  div.addEventListener("click", function () {
    elMain.style = `transform:translateY(-${window.innerHeight * 3}px)`;
    $(".third-banner").addClass("fadeout"); //세번째 섹션 사라지는 이벤트
  });
}); //세번째 버튼들 클릭시 아래 스크롤
let scroll3 = window.innerHeight * 3;
elBtn03.forEach(function (div, key) {
  div.addEventListener("click", function () {
    elMain.style = `transform:translateY(-${scroll3 + 112}px)`;
    $(".fourth-banner").addClass("fadeout"); //세번째 섹션 사라지는 이벤트
  });
}); //세번째 버튼들 클릭시 아래 스크롤
