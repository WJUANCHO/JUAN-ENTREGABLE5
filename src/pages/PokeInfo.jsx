import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokeInfo = () => {

  const [hasError, sethasError] = useState(false)

  const {id} = useParams()

  const [poke, setpoke] = useState()

  useEffect(() => {
    const url=`https://pokeapi.co/api/v2/pokemon/${id}`
    axios.get(url)
      .then(res => {
        setpoke(res.data)
        sethasError(false)
       } )
      .catch(err =>{
        sethasError(true)
        console.log(err)
      })
   
  }, [id])

  console.log (poke)
  if(hasError) {
    return <div className='err'>
                  <h1>❌The Pokemon with name "{id}"not found 😥❌ </h1>
                  <img className='header__imgpoke1' src="public\images\nopokeball.png" alt="" />
                  <img className='header__imgpoke2' src="public\images\nopoke.png" alt="" />
          </div>
  }
  else{

  return (
    
     <div className='body__pokemon'>
      <div>
            <div className='header'>
           <img className='header__img' src="public\images\Imagen1.png" alt="" />
           <div className='header__black'>
            <div className='header__circle'>
                <div className='header__circle-int'></div>

            </div>

        </div>
    </div>
      </div>
      <img className='ask' src="public\images\Pokelogo.png" alt="" />
      <div className='poke__first'>
      
           <img className='img__poke' src={poke?.sprites.other['official-artwork'].front_default} alt="" />
            
            <h1 className='name1'>{poke?.name}<hr/></h1>
        <div className='container__box1'>
          <h4><span>weight: </span>{poke?.weight}</h4>
          <h4><span>height: </span>{poke?.height}</h4>
         </div>
      </div>

      <div className='container__box2'>
      <ul className='type'><p className='text'>Type</p>
            {
                poke?.types.map(type => (
                    <li className='card__type-item1' key={type.type.name}>{type.type.name}</li>
                ))
            }
        </ul>
        <ul className='abilities'><p className='text'>Abilities</p>
            {
                poke?.abilities.map(ability => (
                    <li className='card__abilities-item' key={ability.ability.name}>{ability.ability.name}</li>
                ))
            }
        </ul>
        </div>
        <div></div>
        <ul className='conteiner__Move'><p className='text2'>Movements</p>
            {
                poke?.moves.map(move => (
                    <li className='card__move' key={move.move.name}>{move.move.name}</li>
                ))
            }
        </ul>
     </div>
  )
 }
}

export default PokeInfo