
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
import FormVjezba from './components/FormVjezba';
import FormDZ from './components/FormDZ';








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
        { ime: "Ankica", godine: 6, imgLink: mladaSlika }
      ],
    };
    this.handleĐuroGodine = this.handleĐuroGodine.bind(this);
    this.handleVratiGodine = this.handleVratiGodine.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleChangeName(e, index) {
    const newNameForĐuro = e.target.value
    this.setState(prevState => {
      const updatedĐuro = [...prevState.users];
      updatedĐuro[index].ime = newNameForĐuro;
      return { users: updatedĐuro }
    })
  }
  handleFormSubmit(e) {
    e.preventDefault()
    const ime = e.target[0].value
    const godine = e.target[1].value

    const noviUser = { ime: ime, godine: godine }
    const stariUser = [noviUser, ...this.state.users]
    console.log(stariUser)

    this.setState({ users:  stariUser })


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
          
        <FormDZ
          handleFormSubmit={this.handleFormSubmit}
        />
          <div className='prije'>
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
            <FormVjezba />



            <Liste />
          </div>
          <div className='users'>

            {users.map((user, index) => {
              return (
                <div
                  key={index}>

                  <img className='slikica' src={user.godina > 18? stariSlika: mladaSlika} width={200} height={200} style={{ maxHeight: "500px" }} alt="logo" />

                  <User
                    name={user.ime}
                    years={user.godine}
                    onNameChange={(e) => this.handleChangeName(e, index)} // proslijeđujemo indeks
                  />
                </div>)

            })

            }
          </div>

        </header>
      </div>

    )
  }
}

export default App;
