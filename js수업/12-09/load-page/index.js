function pageLoad(pageUrl, i) {
  $("main").removeClass("active");
  setTimeout(function () {
    $("main").load(pageUrl, function () {
      $(this).addClass("active");
      // addClass(), removeClass(), toggleClass(), hasClass() jquery
      //                                           ==contain() 바닐라
    });
  }, 500);

  $("header a").removeClass("on").eq(i).addClass("on");
}
pageLoad("main.html");

$("header a").on("click", function (e) {
  e.preventDefault(); //이벤트 전파를 차단할 떄 쓰는 명령
  let url = $(this).attr("href");
  // let url = this.getAttribute('href'); 바닐라 사용시

  let idx = $(this).index();
  history.pushState({ page: idx, url: url }, "test");
  pageLoad(url, idx);
  $("header a:first)").trigger("click");
});

/* Headers.addEventListener('click',function(){

}) 바닐라 사용시*/

$(window).on("popstate", function () {
  let idx = history.state.page;
  let url = history.state.url;
  pageLoad(url, idx);
  console.log(idx);
});

/* 비동기 방식
Ajax(load, fetch.$.ajax)
웹서버에 페이지를 요청(request) -> 웹서버에서 페이지를 받는다(response)

click, setTimeout, setInterval */

/* 동기 방식
브라우저가 문서의 순서에 따라서 실행하는 방식 */

