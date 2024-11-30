export default function Navbar() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand">P I M</a>
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
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  BOM model
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Production Line</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Products</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Data Tools
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item">1</a>
                  </li>
                  <li>
                    <a className="dropdown-item">2</a>
                  </li>
                  <li>
                    <a className="dropdown-item">3</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link">Help</a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    );
  }
  