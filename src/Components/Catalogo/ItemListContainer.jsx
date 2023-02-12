import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import productos from "../../api/productos.json";
import { useState, useEffect } from "react";

export function ItemListContainer({ greeting }) {
  const [prod, setProd] = useState([]);
  const [productWait, setProductWait] = useState(false);

  const { Category } = useParams();

  const promesa = new Promise((res, reject) => {
    setTimeout(() => {
      res(productos);
    }, 2000);
  });

  useEffect(() => {
    setProd([]);

    promesa.then((result) => {
      if (!Category) {
        setProd(result);
        setProductWait(true);
      } else {
        const categoryProd = productos.filter(
          (prod) => prod.category === Category
        );
        setProd(categoryProd);
        setProductWait(true);
      }
    });
  }, [Category]);

  return productWait ? (
    <div className="container text-center mt-3">
      <h2>{greeting}</h2>
      <div className="itemList mt-4">
        <ItemList items={prod} />
      </div>
    </div>
  ) : (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-border"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
