import React from 'react'
import '../StylesSheets/CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


export function CartWidget() {
  return (
    <>
    <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#ec-Modal">
      <FontAwesomeIcon icon={faShoppingCart} />
    </button>
    <sup className='numHardCodeado'>0</sup>

    <div className="modal fade" id="ec-Modal" aria-labelledby="eMl" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="eMl">Compras Añadidas</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body bg-light text-center">
            <h4>Productos agregados al carrito</h4>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" className="btn btn-success">Comprar</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}