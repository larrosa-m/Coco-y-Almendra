
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import NavBarBt from './components/NavBarBt';
import ItemdetailContainer from './components/ItemdetailContainer';
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {
 

  return (
    <BrowserRouter>
      
     <NavBarBt/>

      <Routes>
        <Route path='/' element={<ItemListContainer saludo="Bienvenidos a Coco y Almendra"/>}/>
         <Route path='/categories/:category' element={<ItemListContainer saludo="Estas en la categoria"/>}/>
        <Route path='=/item/:id' element={<ItemdetailContainer/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
