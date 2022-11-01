import React, {useState} from 'react'
import axios from 'axios'

const Pokemon = () => {
    
    //define state
    const [pokeList, setPokeList]= useState([])
    const [errResponse, setErrResponse] = useState("")


    const makeAPICall = ()=> {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=805")
            .then(res => {
                const {results} = res.data
                setPokeList(results)
            })
            //successful response
            .catch(error => setErrResponse("Ooops something went wrong"))// unsuccessful response
    }

    return (
        <fieldset>
            <legend>Pokemon.jsx</legend>
            <button onClick={makeAPICall}> Fetch Pokemon</button>
            {errResponse? <p>{errResponse}</p> :null}
            {
                pokeList.map((poke)=> <p>{poke.name}</p> )
            }
        </fieldset>
    )
}

export default Pokemon