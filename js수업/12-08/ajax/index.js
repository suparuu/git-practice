fetch("./data.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (gallery) {
    init(gallery.data);
  });

function init(data) {
  const elThumb = document.querySelector(".thumb"),
    elBtn = document.querySelector(".thumb button"),
    elImg01 = document.querySelector(".thumb figure "),
    elImg02 = document.querySelector(".detail figure"),
    elImgbtn = document.querySelectorAll('.on');

    elBtn.onclick = function () {
      elImg01.classList.toggle("on");
      let B = '';
      data.forEach(function (A, key) {
      B += `<img src="${data[key].url}">`;
      elImg01.innerHTML = B;
      
      const elImgbtn = document.querySelectorAll(".on img");
      elImgbtn.forEach(function (C, key) {
          C.onclick = function () {
            elImg02.classList.add("on")
            setTimeout(function(){
              elImg02.innerHTML = `<img src="${data[key].url}">
              <figcaption>
              <h2>${data[key].title}</h2>
              ${data[key].detail}
              <br>
              </figcaption>`;
            },50*key)
            };
        });
    });
};


    /* setTimeout(function () {}, 50 * key); */
}
