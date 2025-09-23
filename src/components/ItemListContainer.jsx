import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import {addDoc, collection, getDocs, query, where} from 'firebase/firestore'
import { db } from "../service/firebase"

const ItemListContainer = ({saludo}) => {
   const [data, setData] = useState([])
   const [loading, setLoading]= useState(false)
    const{category}= useParams()

    useEffect(()=>{
        setLoading(true)
        const productsCollection = category ? query(collection(db, "productos"), where("category", "==", category)) :collection(db, "productos") 

        getDocs(productsCollection)
        .then((res)=>{
           
           const list = res.docs.map((doc)=>{
            return{
                id:doc.id,
                ...doc.data()
            }
           })
           setData(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[category])

    return(
        <>
        {loading 
        ? <LoaderComponent/> 
        : <div>
            <h1>{saludo}</h1>
            <ItemList data={data}/>
        </div>}
        </>
       
    )
}
export default ItemListContainer