import "./App.css";
import { NavBar } from "./Components/NavBar";
import { ItemListContainer } from "./Components/Catalogo/ItemListContainer";
import { ItemDetailContainer } from "./Components/DetalleProducto/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import { CartContainer } from "./Components/CartContainer/CartContainer";
import { CartProvider } from "./Contexts/CartContext";
import { DataBaseProvider } from "./Contexts/DataBaseProvider";
import { Checkout } from "./Components/Checkout/Checkout";

function App() {
  return (
    <DataBaseProvider>
      <CartProvider>
        <div className="App bg-ligth">
          <NavBar background={"transparent"} />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={`Catálogo de Productos`} />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:Category" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </CartProvider>
    </DataBaseProvider>
  );
}

export default App;
