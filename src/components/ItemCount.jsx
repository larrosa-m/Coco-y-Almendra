import {useState} from 'react'

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount]=useState(1)
    
    
    const sumar = () => {
      if(count < stock){

        setCount(count + 1)
      }
    }
   const restar = () => {
    if(count> 0){

      setCount(count - 1)
    }
    }

const comprar = ()=>{
  onAdd(count)
}
  return (
    <>
    {stock > 0 
    ?  <div className="d-flex justify-content-center flex-column">
        <div>
          <button className='btn btn-danger' onClick={restar}>-</button>
        <span className='btn'>{count}</span>
        <button className='btn btn-success' onClick={sumar}>+</button>
        </div>
         <button className='btn btn-primary mt-2' disabled={count === 0 || stock === 0} onClick={comprar} style={{
            backgroundColor: '#83a333', 
            borderColor: '#83a333', 
            color: '#fff', 
            display: 'block',
            margin: '0 auto',
            width: '120px',
            textAlign: 'center'
        }} >Comprar</button>
    </div>
    : <p>Lo sentimos no hay stock disponible</p>}
   
    </>
  )
}

export default ItemCount
