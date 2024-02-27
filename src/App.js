
import './App.css';
import GodineButton from './components/GodineButton';
import React, { useState } from 'react';
import IpakNemoj from './components/IpakNemoj';
import mladaSlika from "./imgs/mladi.jpg"
import stariSlika from "./imgs/OIP.jpg"
import LifeCycle from './components/LifeCycle';



/* function App() {
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
} */
class App extends React.Component{
  constructor(){
    super();
    this.state ={
      đuro: {ime: "Đuro", godine: "5 godina", imgLink: mladaSlika}
    };
    this.handleĐuroGodine = this.handleĐuroGodine.bind(this);
    this.handleVratiGodine = this.handleVratiGodine.bind(this);
  }

  handleĐuroGodine(đurica){
    console.log(this.state.đuro)
    const newĐuro = {...this.đuro}
    newĐuro.godine = `${đurica} godina`
    newĐuro.imgLink = stariSlika;
    this.setState({đuro: newĐuro})
  }
  handleVratiGodine(){
    this.setState({đuro: {ime: "Đuro", godine: "5 godina", imgLink: mladaSlika}})
  }

  render(){
    const đuro = this.state.đuro
    console.log(đuro)
    return(
        <div className="App">
          <header className="App-header">
            
             <img src={đuro.imgLink} style={{maxHeight:"500px"}} alt="logo" />
     
            
            <GodineButton
              handleĐuroGodine= {this.handleĐuroGodine}
            />
            <p>
              {đuro.ime}, {đuro.godine}
            </p>
            <IpakNemoj
             handleVratiGodine= {this.handleVratiGodine}
            />
            
          </header>
          <LifeCycle/>
        </div>
      
    )
  }
}

export default App;
