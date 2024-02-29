import React, { useState } from 'react'

function FormVjezba() {

    const [tekst, setTekst] = useState("")
    const [pokaziTekst, setPokaziTekst] = useState(false)


    const handleSubmit = (event) => {
        event.preventDefault();

       alert(`Tvoj tekst je spremljen`)
    }
    const handleChange = (e) => {
        setTekst(e.target.value)
    }

    const handleShowTekst = ()=>{
setPokaziTekst(!pokaziTekst)
    }
    return (


        <div>
            <form onSubmit={handleSubmit}>
                <label >
                    Neki tekst:
                    <input type="text" onChange={handleChange} />
                </label>
                <input type="submit" value="Potvrda" />

            </form>
            <button onClick={handleShowTekst}>{!pokaziTekst? "Prikazi svoje tekst!! " : "Sakrij tekst"}</button>
            {pokaziTekst && tekst.length>0 &&
                <h1>Tvoj tekst je <br /> {tekst}</h1>

            }
        </div>
    )
}

export default FormVjezba