import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../store/slices/trainerName.slice'

export const Home = () => {

    const dispatch= useDispatch()
    const navigate = useNavigate()

     const handleSubmit = e =>{
        e.preventDefault()
        dispatch(setNameTrainer(e.target.name.value.trim())
        
      )
      e.target.name.value =''
      navigate('/pokedex')
     }

  return (
    <div className='home'>
        <img className='home__img' src="public\images\Imagen1.png" alt="" />
        <h2 className='home__title'>¡Hi Trainer!</h2>
        <p className='home__description'>To start this pokedex, give me your name</p>
        <form className='home__form' onSubmit={handleSubmit}>
            <input className='home__input' id='name' type="text" />
            <button className='home__btn'>Start</button>
        </form>
        <div className='boxAll'>
        <div className='header'>
        <div className='header__black'>
            <div className='header__circle'>
                <div className='header__circle-int'></div>

            </div>

        </div>
    </div>

        </div>
        
    </div>
  )
}
