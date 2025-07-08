import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-warning">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Sistema de Arriendos
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/arriendos" className="nav-link">
                Arriendos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/usuarios" className="nav-link">
                Cambiar Contraseña
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Cerrar Sesion
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
