import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const ItemDetail = ({
  id,
  description,
  price,
  image,
  title,
  category,
}) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("Sumando Cantidad");
  }, [count]);

  return (
    <div className="card rounded-3 shadow m-3" id={id}>
      <div className="card-header">
        <img
          className="image img-fluid img-thumbnail rounded-3"
          src={image}
          alt={title}
        />
      </div>
      <div className="card-body">
        <p>{description}</p>
        <p>{`$${price}`}</p>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-secondary"
            onClick={() => {
              count === 1 ? setCount(1) : setCount(count - 1);
            }}
          >
            -
          </button>
          <span className="m-1 fw-bold fs-5">{count}</span>
          <button
            className="btn btn-secondary"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </button>
          <button className="btn btn-success mx-1" onClick={() => {
            MySwal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Producto Agregado al Carrito',
              showConfirmButton: false,
              timer: 1500
            })
          }}>Agregar al Carrito</button>
        </div>
        <hr />
        <Link className="btn btn-secondary" to={`/category/${category}`}>
          volver
        </Link>
      </div>
    </div>
  );
};
