import { useEffect, useState } from "react";
import { getProducts } from "../mock/AsyncService";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {collection, getDoc } from "firebase/firestore"
import { db } from "../Service/firebase";

const ItemListContainer = ({saludo}) => {
  const [data, setData] = useState([])
const {category}= useParams()


useEffect(()=>{
setlouding(true)
const poductsCollection = collection(db, "productos")
getDoc(productsCollection)
.then((res) => {
  const list = res.docs.map((doc) => {
    return { id: doc.id, ...doc.data()
  }
})
  setData(list)
})
.catch((error) => console.log(error))
.finally(() => setLoading(false))
}, [category])

  //useEffect(()=>{
   //   .then((res)=> {
     //   if (category) {
       //   setData(res.filter((producto) => producto.category === category))
     ////   }else {
      //    setData(res)
     //   }
     // })
     // .catch((error)=> console.log(error))
  // }, [])
  
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