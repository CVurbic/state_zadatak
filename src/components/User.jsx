import React from 'react'

function User({name, years, onNameChange}) {
  return (
    <div>
        <p>Pozdrav, moje ime je {name} i imam {years} godina.</p>
        <input type="text" onChange={(index)=>onNameChange(index)} value={name} disabled={!onNameChange} />
    </div>
  )
}

export default User