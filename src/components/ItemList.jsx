import React from 'react'
import Item from './Item'

const ItemList = ({data}) => {
  return (
    <div style={{display: 'flex',
      alignItems:'center',
      flexWrap: 'wrap',
      gap: '20px', 
      justifyContent: 'center',
      borderRadius: '25px',
       margin: '30px'
    }}>
      {data.map((prod) => <Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList
