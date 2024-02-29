
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
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        { ime: "Đuro", godine: 5, imgLink: mladaSlika },
        { ime: "Pero", godine: 10, imgLink: stariSlika },
        { ime: "Katica", godine: 4, imgLink: mladaSlika },
        { ime: "Ankica", godine: 6, imgLink: mladaSlika },
        { ime: "Antuša", godine: 6, imgLink: mladaSlika }
      ]
    };
    this.handleĐuroGodine = this.handleĐuroGodine.bind(this);
    this.handleVratiGodine = this.handleVratiGodine.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
  }

  handleChangeName(e, index) {
    const newNameForĐuro = e.target.value
    this.setState(prevState => {
      const updatedĐuro = [...prevState.users];
      updatedĐuro[index].ime = newNameForĐuro;
      return { users: updatedĐuro }
    })
  }

  handleĐuroGodine(đurica) {
    const newĐuro = { ...this.state.users }

    newĐuro.godine = `${đurica} godina`
    newĐuro.imgLink = stariSlika;
    this.setState({ users: newĐuro })
  }
  handleVratiGodine() {
    this.setState({ users: { ime: "Đuro", godine: 5, imgLink: mladaSlika } })
  }

  render() {
    const users = this.state.users
    return (
      <div className="App">
        <header className="App-header">



          <GodineButton
            handleĐuroGodine={this.handleĐuroGodine}
          />
          <p>
            {users.ime}, {users.godine}
          </p>
          <KorisnikovInput
            handleChangeName={this.handleChangeName}
            korisnik={users}
          />
          <IpakNemoj
            handleVratiGodine={this.handleVratiGodine}
          />
          <Liste />
          {users.map((user, index) => {
            return (
              <div 
              key={index}>

                <img src={user.imgLink} style={{ maxHeight: "500px" }} alt="logo" />

                <User
                  name={user.ime}
                  years={user.godine}
                  onNameChange={(e) => this.handleChangeName(e, index)} // proslijeđujemo indeks
                />
              </div>)

          })

          }
        </header>{/* 
          <LifeCycle/> */}
      </div>

    )
  }
}

export default App;
