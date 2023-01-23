import './App.css';
import { NavBar } from './Components/NavBar';
import { ItemListContainer } from './Components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar background={'transparent'}/>
      <div className="container text-center mt-3">
        <ItemListContainer 
        greeting={`Bienvenidos al Mundo de la Tecnología`}/>
      </div>
    </div>
  );
}

export default App;
