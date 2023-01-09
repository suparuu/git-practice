$("body").prepend("<header>");
$("header").load("./inc.html header> div");

fetch("./js/data.json")
  .then((response) => response.json())
  .then((data) => {
    callback(data);
  });

function callback(data) {
  const elBox = document.querySelector(".flexbigbox"),
   elBox01 = document.querySelector(".box01");

  let Thick = data.KTNG.thick;
  let Thin = data.KTNG.thin;
  console.log(Thick);
  console.log(Thin[0].url);
  console.log(Thin[0].rating);

  function thinIn() {
    for (i = 0; i < Thin.length; i++) {
      elBox.innerHTML += `<div class="flexbox">
      <div class="name">${Thin[i].title}</div>
      <div class="img">
        <img src="${Thin[i].url}" alt="" />
      </div>
      <div class="ex">
        <p>${Thin[i].tag}</p>
      </div>
      <div class="rating">
        <p>${Thin[i].rating.replaceAll("\\n", "<br>")}</p>
      </div>
    </div>`;
    }
  }
  thinIn();
  function thickIn(){
    for (i = 0; i < Thick.length; i++) {
        elBox01.innerHTML += `<div class="flexbox">
        <div class="name">${Thick[i].title}</div>
        <div class="img">
          <img src="${Thick[i].url}" alt="" />
        </div>
        <div class="ex">
          <p>${Thick[i].tag}</p>
        </div>
        <div class="rating">
          <p>${Thick[i].rating.replaceAll("\\n", "<br>")}</p>
        </div>
      </div>`;
      }
  }
  thickIn();


}
