$(".imgbox01 div").not(":first").hide();
let num = 0,
  fadeInterval;

fadeInterval = setInterval(function () {
  $(".imgbox01 div").eq(num).fadeOut(1000);
  if (num == 4) {
    num = 0;
  } else {
    num++;
  }
  $(".imgbox01 div").eq(num).fadeIn(1000);
}, 2000);

function scrollevent(){
    const ImgScroll = document.querySelectorAll('.scrollevent');
    let Screen = window.innerHeight;
    ImgScroll.forEach(function(a,key){
        if(ImgScroll[key]-Screen < window.scrollY){
            ImgScroll[key].classList.add('on')
        }
    })
}


window.addEventListener('scroll',scrollevent)
console.log()