import React from 'react'
 import './styles/header.css' 
 
const Header = () => {
  return (
    <div className='header'>
        <img className='header__img' src="public\images\Imagen1.png" alt="" />
        <div className='header__black'>
            <div className='header__circle'>
                <div className='header__circle-int'>hola mundo</div>

            </div>

        </div>
    </div>
  )
}

export default Header