import shopLogo from '../assets/shop-logo.png' 
import { CartWidget } from "./CartWidget";
import "../StylesSheets/NavBar.css";
import { NavLink } from "react-router-dom";

export function NavBar(background) {
  return (
    <header className={`header bg-${background}`}>
      <nav className="navbar navbar-expand-lg fw-bold">
        <div className="container-fluid">
          <NavLink className="navbar-brand" aria-current="page" to="/">
            <img className='img-fluid' style={{ width: "6em"}} src={shopLogo} alt="Shop Logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarS"
            aria-controls="navbarS"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarS">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"></li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fw-bold"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorías
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      className="dropdown-item fw-bold"
                      to={"/category/celulares"}
                    >
                      Celulares
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item fw-bold" to={"/category/smartTv"}>
                      Smart TV
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item fw-bold"
                      to={"/category/smartWatch"}
                    >
                      Smart Watch
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item fw-bold"
                      to={"/category/minicomponentes"}
                    >
                      Minicomponentes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item fw-bold"
                      to={"/category/auriculares"}
                    >
                      Auriculares
                    </NavLink>
                  </li>
                </ul>
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
