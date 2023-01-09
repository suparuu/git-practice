$("body").prepend("<header>");
$("header").load("./inc.html header> div");

fetch("./js/data.json")
  .then((response) => response.json())
  .then((data) => {
    callback(data);
  });
  function callback(data){

    const elBox = document.querySelector('.flexbigbox');

    let Thick = data.KTNG.thick;
    let Thin = data.KTNG.thin;
  console.log(Thick);
  console.log(Thin[0].url);
  console.log(Thin[0].rating)
  function loopIn() {
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
  loopIn();

        

  }