import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PokeCard from '../components/Pokedex/PokeCard'
import SelectTypes from '../components/Pokedex/SelectTypes'

const Pokedex = () => {


   const {nameTrainer} = useSelector(state=>state)

   const [pokemons, setpokemons] = useState()
   const [selectValue, setselectValue] = useState('allpokemons')
   
   console. log(selectValue)


   useEffect(() => {
    if(selectValue ==='allpokemons' ){
      const url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0'
      axios.get (url)
         .then(res =>setpokemons (res.data))
         .catch(err => console.log (err))
    } else{
      axios.get(selectValue)
         .then(res =>{
          const results=res.data.pokemon.map(e => e.pokemon)
          setpokemons({results})
         })  
         .catch(err=> console.log(err))
    }
   }, [selectValue])

   const navigate = useNavigate()

   const handleSubmit =e => {
         e.preventDefault()
          const inputValue =e.target.pokemon.value.trim().toLowerCase()
         navigate (`/pokedex/${inputValue}`)
         e.target.pokemon.value =''
   }

  return (
    <div className='pokedex'>
      <header className='top'>
      <div className='header'>
        <img className='header__img' src="public\images\Imagen1.png" alt="" />
        <div className='header__black'>
            <div className='header__circle'>
                <div className='header__circle-int'></div>

            </div>

        </div>
    </div>
      </header>
       
       <h1 className='pokedex__title'>
        <span className='pokedex__title-name'>Hi {nameTrainer}</span>, here find your favorite pokemon. </h1>
        <h1>
          <form className='btn' onSubmit={handleSubmit}>
               <input className='btn__input' id="pokemon" type="text" />
                <button className='btn__button'>Search</button>
          </form>
          <SelectTypes setselectValue = {setselectValue}/>
        </h1>
      <div className='pokedex__container-pokemon'>
        {
          pokemons?.results.map(pokemon => (
            <PokeCard
                key={pokemon.url}
                pokemon={pokemon}
            />

          ) )
        }
      </div>
    </div>
  )
}

export default Pokedex