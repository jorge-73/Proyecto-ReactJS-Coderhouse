import { ItemDetail } from "./ItemDetail";
import productos from "../../api/productos.json";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {

  let { id } = useParams()
  
  const product = productos.find((prod) => prod.id === parseInt(id));

  return (
    <div className="container text-center">
      <h2>Detalle del Producto</h2>
      <div className="d-flex justify-content-center align-items-center">
        <ItemDetail 
          id={product.id}
          description={product.description}
          price={product.price}
          image={product.pictureUrl}
          title={product.title}
          category={product.category} />
      </div>
    </div>
  )
};
