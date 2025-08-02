import { useEffect, useState } from "react";
import { getProducts } from "../mock/AsyncService";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({saludo}) => {
  const [data, setData] = useState([])
const {category}= useParams()

  useEffect(()=>{
    getProducts()
      .then((res)=> {
        if (category) {
          setData(res.filter((producto) => producto.category === category))
        }else {
          setData(res)
        }
      })
      .catch((error)=> console.log(error))
  }, [])
  
  console.log(data, 'data')
    return(
        <div>
            <h1>{saludo}</h1>
            {/*data.map((producto) => <p key={producto.id}>{producto.name}</p>)*/}
            <ItemList data={data}/>
      </div>    
    )
}
export default ItemListContainer;