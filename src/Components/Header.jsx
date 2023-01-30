import React from 'react'
import './header.css'
import Main from './Main'
const header = () => {
  return (
    <div className='header-container'>
    <div className='container'>
        <nav>
        <h1>Wearea</h1>
        <input type='search'></input>
        <button className='sign-in'>Sign in</button>
        <button className='sign-up'>Sign up</button>
        </nav>
    </div>
    <Main/>
    </div>
  )
}

export default header