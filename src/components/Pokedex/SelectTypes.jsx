import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelectTypes = ({setselectValue}) => {


     const [types, settypes] = useState()

     useEffect(() => {

        const url ='https://pokeapi.co/api/v2/type'
          axios.get(url)
             .then(res=> settypes(res.data))
             .catch(err => console.log(err))
      
     }, [])
     
    const handleChange = e =>{
      setselectValue(e.target.value)
    }

  return (

    <select onChange={handleChange}>
      <option value = 'allpokemons'>All Pokemons</option>
          {
            types?.results.map(type=>(
               <option key = {type.url} value = {type.url}>{type.name}</option>
            ))
          }
    </select>
  
   
  )
}

export default SelectTypes