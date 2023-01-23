import React from 'react'
import { CartWidget } from './CartWidget';
import '../StylesSheets/NavBar.css';

export function NavBar(background) {
  return (
        <header className={`header bg-${background}`}>
          <nav className="navbar navbar-expand-lg fw-bold">
            <div className="container-fluid">
              <a className="navbar-brand" href="#!">Tienda de Tecnología</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarS" aria-controls="navbarS" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarS">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#!">Inicio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#!">Productos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#!">Nosotros</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#!">Otros</a>
                  </li>
                </ul>
                <div className="cartWidget">
                  <CartWidget />
                </div>
              </div>
            </div>
          </nav>
        </header>
  );
}
