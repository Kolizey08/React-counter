import React from 'react'
import './Main.css'

export default function Main() {
  return (
    <div className='divMain'>
      <div>
        <div>
            <div className='divFoto0'> <img src="0.png" alt="0" /></div>
        </div>
        <div className='divButtons'>
            <div className='button'><button className='btn1'>Увеличить</button></div>
            <div className='button'><button className='btn2'>Уменшить</button></div>
            <div><button className='btn3'>Сбросить</button></div>
        </div>
        </div>  
    </div>
  )
}
