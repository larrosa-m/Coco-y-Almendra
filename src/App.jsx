
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import NavBarBt from './components/NavBarBt';
import ItemdetailContainer from './components/ItemdetailContainer';
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from './components/NotFound';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import CheckoutUseForms from './components/CheckoutUseForms';

function App() {
 

  return (
    <BrowserRouter>
      
     <CartProvider> 
      <NavBarBt/>  

      <Routes>
        <Route path='/' element={<ItemListContainer saludo="Bienvenidos a Coco y Almendra"/>}/>
         <Route path='/categories/:category' element={<ItemListContainer saludo="Estas en la categoria"/>}/>
        <Route path='/item/:id' element={<ItemdetailContainer/>}/>
         <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<CheckoutUseForms/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      
     </CartProvider>
    </BrowserRouter>
  )
}

export default App
