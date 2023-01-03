let ciga = [
  {
    id: "0",
    url: "./img/01_esse_change_himalaya.jpg",
    title: "에쎄체인지 히말라야",
    detail: "니코틴0.5mg 타르 5mg",
  },
  {
    id: "1",
    url: "./img/02_sevenstars.jpg",
    title: "세븐스타",
    detail: "니코틴0.6mg 타르7mg",
  },
  {
    id: "2",
    url: "./img/03_africa_sunday.jpg",
    title: "아프리카 썬데이",
    detail: "니코틴0.5mg 타르 5mg",
  },
  {
    id: "3",
    url: "./img/04_marboro_hybrid5.jpg",
    title: "말보로 하이브리드5mg",
    detail: "니코틴0.6mg 타르7mg",
  },
  {
    id: "4",
    url: "./img/05_bohem_cubana_double.jpg",
    title: "보헴시가 쿠바나 더블",
    detail: "니코틴0.5mg 타르 5mg",
  },
  {
    id: "5",
    url: "./img/06_esse_change_up.jpeg",
    title: "에쎄 체인지업",
    detail: "니코틴0.6mg 타르7mg",
  },
];
console.log(ciga[0]);
let data = {
  thin: {
    yes: {
      more: [0, 1, 2],
      less: [1, 3, 5],
    },

    no: {
      more: [0, 1, 3],
      less: [0, 1, 5],
    },
  },
  thick: {
    yes: {
      more: [0, 1, 4],
      less: [0, 1, 2],
    },
    no: {
      more: [2, 3, 4],
      less: [3, 4, 5],
    },
  },
};
console.log(ciga[0]); //ciga 배열 0번째 id값
/* let result01 = ciga.filter((ans) => {
  return ans.id == data.test.thin.yes.more;
}); */

/* let a = product[result[0]][result[1]];
console.log(
    a.url,
    a.title,
    a.detail
) */

const elMain = document.querySelector("main"),
  elSec01 = document.querySelector(".first-banner"),
  elSec02 = document.querySelector(".box01"),
  elSec03 = document.querySelector(".box02"),
  elUl = document.querySelectorAll("ul"),
  elDiv00 = document.querySelector(".btn01"),
  elDiv01 = document.querySelectorAll(".btn02"),
  elDiv02 = document.querySelectorAll(".btn03"),
  elDiv03 = document.querySelectorAll(".btn04"),
  elPopup = document.querySelector(".popup"),
  elExit = document.querySelector(".exit"),
  elBox03 = document.querySelector(".box03"),
  elPopmenu = document.querySelector(".popmenu");

let A = 0;

let answer = [];
console.log(window.innerHeight * 2);

elDiv00.addEventListener("click", function () {
  elMain.style = `transform:translateY(-${window.innerHeight}px)`;
  elSec01.classList.add("fadeout");
});
elDiv01.forEach(function (div, key) {
  div.addEventListener("click", function () {
    elSec02.classList.add("fadeout");

    elMain.style = `transform:translateY(-${window.innerHeight * 2}px)`;
    if (key == 0) {
      answer.push("thick");
    } else {
      answer.push("thin");
    }
  });
});
elDiv02.forEach(function (div, key) {
  div.addEventListener("click", function () {
    elSec03.classList.add("fadeout");

    elMain.style = `transform:translateY(-${window.innerHeight * 3}px)`;
    if (key == 0) {
      answer.push("yes");
    } else {
      answer.push("no");
    }
  });
});
console.log(ciga[0].url);
elDiv03.forEach(function (div, key) {
  div.addEventListener("click", function () {
    $(".popup").fadeIn();
    $(".box03").addClass("black");
    if (key == 0) {
      answer.push("more");
      let test1 = data[answer[0]][answer[1]][answer[2]]; //thin,yes,more 결과값
      elPopmenu.innerHTML += `<div class="imgbox">
      <img src="${ciga[test1[0]].url}" alt="">
           <img src="${ciga[test1[1]].url}" alt="">
           <img src="${ciga[test1[2]].url}" alt="">
           </div>`;
    } else {
      answer.push("less");
      let test1 = data[answer[0]][answer[1]][answer[2]]; //thin,yes,more 결과값
      elPopmenu.innerHTML += `<div class="imgbox">
      <img src="${ciga[test1[0]].url}" alt="">
      <img src="${ciga[test1[1]].url}" alt="">
      <img src="${ciga[test1[2]].url}" alt="">
      <div>`;
    }
    console.log(data[answer[0]][answer[1]][answer[2]]);
  });
});

$(".exit").click(function () {
  console.log("asd");
  $(".popup").fadeOut();
  $(".box03").removeClass("black");
});
