import React from 'react'

function FormDZ({handleFormSubmit}) {

    
  return (
    <form className='newUserForm' onSubmit={handleFormSubmit}>

        <label style={{width:"100%", textAlign:'left'}} htmlFor="">
            Ime: 
            <input style={{width:"100%"}} type="text"  />
        </label>
        <label style={{width:"100%", textAlign:'left'}} htmlFor="">
            Godine: 
            <input style={{width:"100%"}}type="number"  />
        </label>
            
            <input type="submit" value={"Submit"} />
    </form>
  )
}

export default FormDZ