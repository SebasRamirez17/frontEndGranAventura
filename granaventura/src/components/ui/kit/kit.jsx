import React from 'react'

export const Kit = () => {
  return (
    <div className='Kits'>
        <div className='divImgKit'>
          <img className='imagenkit' src="https://i.pinimg.com/736x/b3/b8/57/b3b85713a822ad3e2c5e1eb74af91554.jpg" alt="" />  
        </div>
        <div className='kit'>
          <h2 className='nombrekit'>Kit especial de Gran Aventura</h2>
          <p className='desckit'>Este es el kit que brinda Gran Aventura para nuestros excursionistas.</p>
          <p className='preciokit'>$5000</p>
          <button className='btnComprar'>Comprar</button>
        </div>
    </div>
  )
}
