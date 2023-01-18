import './App.css';

function App() {
  fetch("http://ddragon.leagueoflegends.com/cdn/13.1.1/data/ko_KR/champion.json")
  .then(Response => Response.json())
  .then(Response => lol(Response))
  .catch(err => console.error(err))

  function lol(data){
    let champ = data.data
            console.log(data)
            console.log(champ)
            console.log(data)
            let ahri = champ.Ahri.image
            console.log(ahri.full)
            let ahriImg = ahri.full;
            let cmpUrl = "http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/"

            console.log(cmpUrl + ahriImg)
            let aaa = cmpUrl + ahriImg

            


  }


  return (
    <main>

    </main>

  )
}

export default App;
