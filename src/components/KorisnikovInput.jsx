import React from 'react'

function KorisnikovInput({handleChangeName, korisnik}) {

  return (
    <div>
        <input type="text" value={korisnik.ime} placeholder={korisnik.ime} onChange={handleChangeName} />
    </div>
  )
}

export default KorisnikovInput