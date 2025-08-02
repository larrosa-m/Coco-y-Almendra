import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
        <img src= '../error.png' alt='error' style={{width: '300px', height: '300px'}}/>
<Link className='btn btn-dark'to='/'>Volver a Home</Link>
      <h1>Not Found 404</h1>
      
    </div>
  )
}

export default NotFound
