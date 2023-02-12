import './App.css';
import { NavBar } from './Components/NavBar';
import { ItemListContainer } from './Components/Catalogo/ItemListContainer';
import { ItemDetailContainer } from './Components/DetalleProducto/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App bg-ligth">
      <NavBar background={'transparent'}/>
      <Routes>
        <Route path='/' element={<ItemListContainer 
        greeting={`Catálogo de Productos`}/>} />
        <Route path='/item/:id' element={<ItemDetailContainer />}/>
        <Route path='/category/:Category' element={<ItemListContainer />} />
      </Routes>
    </div>
  );
}

export default App;
