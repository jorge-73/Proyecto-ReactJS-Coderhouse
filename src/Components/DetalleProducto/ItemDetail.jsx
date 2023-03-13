import { useContext, useState } from "react";
import { CartContext } from "../../Contexts/CartContext";
import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount";

export const ItemDetail = ({ item }) => {
  const { addProduct } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const onAdd = (count) => {
    addProduct(item, count);
    setQuantity(count);
  };

  return (
    <div className="card rounded-3 shadow m-3" id={item.id}>
      <div className="card-header">
        <img
          className="image img-fluid img-thumbnail rounded-3"
          src={item.pictureUrl}
          alt={item.title}
        />
      </div>
      <div className="card-body">
        <p>{item.description}</p>
        <p>{`$${item.price}`}</p>
      </div>
      <div className="card-footer">
        <ItemCount initial={0} quantity={item.quantity} onAdd={onAdd} />
        {quantity > 0 && (
          <Link to="/cart">
            <button className="btn btn-secondary">Ir al carrito</button>
          </Link>
        )}
        <hr />
        <Link className="btn btn-secondary" to={`/category/${item.category}`}>
          volver
        </Link>
      </div>
    </div>
  );
};
