
import './App.css';
import GodineButton from './components/GodineButton';
import React/* , { useState } */ from 'react';
import IpakNemoj from './components/IpakNemoj';
import mladaSlika from "./imgs/mladi.jpg"
import stariSlika from "./imgs/OIP.jpg"
// import LifeCycle from './components/LifeCycle';
import KorisnikovInput from './components/KorisnikovInput';
import Liste from './components/Liste';
import User from './components/User';







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
      đuro: [
        {ime: "Đuro", godine: 5, imgLink: mladaSlika},
        {ime: "Pero", godine: 10, imgLink: mladaSlika},
        {ime: "Katica", godine: 4, imgLink: mladaSlika},
        {ime: "Ankica", godine: 6, imgLink: mladaSlika}
    ]
    };
    this.handleĐuroGodine = this.handleĐuroGodine.bind(this);
    this.handleVratiGodine = this.handleVratiGodine.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
  }

handleChangeName(e, index){
  const newNameForĐuro = e.target.value
  this.setState(prevState =>{
    const updatedĐuro = [...prevState.đuro];
    updatedĐuro[index].ime = newNameForĐuro;
    return {đuro: updatedĐuro}
  })
}

  handleĐuroGodine(đurica){
    const newĐuro = {...this.state.đuro}
    
    newĐuro.godine = `${đurica} godina`
    newĐuro.imgLink = stariSlika;
    this.setState({đuro: newĐuro})
  }
  handleVratiGodine(){
    this.setState({đuro: {ime: "Đuro", godine: 5 , imgLink: mladaSlika}})
  }

  render(){
    const đuro = this.state.đuro
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
            <KorisnikovInput
            handleChangeName = {this.handleChangeName}
            korisnik = {đuro}
            />
            <IpakNemoj
             handleVratiGodine= {this.handleVratiGodine}
            />
            <Liste/>
            {đuro.map((user,index)=>{
              return(<User
              key={index}
                name = {user.ime}
                years = {user.godine}
                onNameChange={(e) => this.handleChangeName(e, index)} // proslijeđujemo indeks
                />)
            })
            
            }
          </header>{/* 
          <LifeCycle/> */}
        </div>
      
    )
  }
}

export default App;
