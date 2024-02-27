
import './App.css';
import GodineButton from './components/GodineButton';
import { useState } from 'react';
import IpakNemoj from './components/IpakNemoj';
import mladaSlika from "./imgs/mladi.jpg"
import stariSlika from "./imgs/OIP.jpg"


function App() {
  const [đuro, setĐuro] = useState({ime: "Đuro", godine: "5 godina", imgLink: mladaSlika})

  function handleĐuroGodine(đurica){
    const newĐuro = {...đuro}
    newĐuro.godine = `${đurica} godina`
    newĐuro.imgLink = stariSlika;
    console.log(newĐuro)
    setĐuro(newĐuro)
  }

  function handleVratiGodine(){
    setĐuro({ime: "Đuro", godine: "5 godina", imgLink: mladaSlika})
  }
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={đuro.imgLink} style={{maxHeight:"500px"}} alt="logo" />

        
        <GodineButton
          handleĐuroGodine= {handleĐuroGodine}
        />
        <p>
          {đuro.ime}, {đuro.godine}
        </p>
        <IpakNemoj
         handleVratiGodine= {handleVratiGodine}
        />
        
      </header>
    </div>
  );
}

export default App;
