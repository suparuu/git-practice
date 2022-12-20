$("body").prepend("<header>");
$("body").append("<footer>");

$("header").load("./inc.html header>div", head);
$("footer").load("./inc.html footer>div");

let idx = localStorage.idx || 0;

function head() {
  $("header a").eq(localStorage.idx).addClass("on");

  $("header a").click(function () {

    let idx = $(this).index();
    localStorage.idx = idx;
  });

  localStorage.setItem(); //수정
  localStorage.getItem(); //가져오기

  localStorage.removeItem(); //지우기
  localStorage.clear(); //초기화
}
