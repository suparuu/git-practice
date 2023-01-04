$("body").prepend("<header>");
$("header").load("./inc.html header> div", callback);
function callback() {
  fetch("./js/data.json").then(function (res) {
    return res.json();
  });
  /* const elMain = document.querySelector("main"),
    elBtn = document.querySelector(".btn"),
    elBtn01 = document.querySelectorAll(".btn01"),
    elBtn02 = document.querySelectorAll(".btn02"),
    elBtn03 = document.querySelectorAll(".btn03"),
    elFooter = document.querySelector("footer"),
    elImg01 = document.querySelector(".header-right img"),
    elMenu = document.querySelector(".menu"); */
  const elMain = document.querySelector("main"),
    elBtn = document.querySelector(".btn"),
    elBtn01 = document.querySelectorAll(".btn01"),
    elBtn02 = document.querySelectorAll(".btn02"),
    elBtn03 = document.querySelectorAll(".btn03"),
    elBtn04 = document.querySelector(".menu img"),
    elFooter = document.querySelector("footer"),
    elImg01 = document.querySelector(".header-right img"),
    elMenu = document.querySelector(".menu");
  console.log(window.innerHeight);
  console.log(elImg01);
  console.log(elBtn04);
  console.log(elMenu.innerWidth);
  elImg01.addEventListener("click", function () {
    /* elMenu.style = `transform:translateX(-10px)`; */
    elMenu.classList.toggle("fade")//버거메뉴 눌렀을때 열고 닫기 
  });
  elBtn04.addEventListener("click", function () {
    console.log("asd");
    elMenu.classList.remove("fade");
  });

  $(".btn").click(function () {
    elMain.style = `transform:translateY(-${window.innerHeight}px)`;
    $(".first-banner").addClass("fadeout"); //첫번째 섹션 사라지는 이벤트
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
  console.log(elFooter.offsetHeight);
  elBtn03.forEach(function (div, key) {
    div.addEventListener("click", function () {
      $(".popup").addClass("black");
      $(".fourth-banner").addClass("black");
      elMain.style = `transform:translateY(-${
        scroll3 + elFooter.offsetHeight
      }px)`;

      if (key == 0) {
      } else {
      }
    });
  }); //네번째 버튼들 클릭시

  $(".close").click(function () {});
}
