import React from 'react'
import { Button, Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Item = ({prod}) => {
  return (
   <Card style={{ width: '18rem', margin:10 }}>
      <Card.Img variant="top" src={prod.image} style={{ height: '250px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
        ${prod.price},00
        </Card.Text>
      <Link className='btn btn-primary' to={`/item/${prod.id}`} style={{backgroundColor: '#83a333',
       borderColor: '#83a333', color: '#fff', display: 'block', margin: '0 auto', width: '120px', textAlign: 'center'
        }} >Ver más</Link>
      </Card.Body>
    </Card>
  )
}

export default Item