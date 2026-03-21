import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";

function Header3({ light }) {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [showWorksDropdown, setShowWorksDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleMobilenav = (e) => {
    e.preventDefault();
    setToggleNavbar(!toggleNavbar);
  };

  const closeMenus = useCallback((e) => {
    if (e.target.closest(".content-3") || e.target.closest(".dentalware-container")) {
      setToggleNavbar(false);
      setShowWorksDropdown(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", closeMenus);
    return () => document.removeEventListener("click", closeMenus);
  }, [closeMenus]);

  const handleNavClick = (section) => {
    if (!isHome) {
      navigate("/?scrollTo=" + section + "&t=" + Date.now());
    }
  };

  const renderNavLink = (section, label) => {
    if (isHome) {
      return (
        <Link
          activeClass="active"
          className="nav-link"
          to={section}
          spy={true}
          smooth={true}
          duration={500}
        >
          {label}
        </Link>
      );
    }
    return (
      <span
        className="nav-link"
        style={{ cursor: "pointer" }}
        onClick={() => handleNavClick(section)}
      >
        {label}
      </span>
    );
  };

  return (
    <header
      className={
        light
          ? "desktop-header-3 fixed-top light"
          : "desktop-header-3 fixed-top"
      }
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a href="/" className="logo-title" style={{ textDecoration: "none", color: "inherit" }}>
            Kyaw Kyaw Lwin
          </a>
          <button
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-target="#navbarNavDropdown"
            data-toggle="collapse"
            type="button"
            onClick={handleMobilenav}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              toggleNavbar
                ? "collapse navbar-collapse show"
                : "collapse navbar-collapse"
            }
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ml-auto scrollspy">
              <li className="nav-item">
                {renderNavLink("section-home", "Home")}
              </li>
              <li className="nav-item">
                {renderNavLink("section-about", "About")}
              </li>
              <li className="nav-item">
                {renderNavLink("section-experiences", "Experience")}
              </li>
              <li
                className="nav-item dropdown-works"
                onMouseEnter={() => setShowWorksDropdown(true)}
                onMouseLeave={() => setShowWorksDropdown(false)}
              >
                <span className={location.pathname === "/dentalware" ? "nav-link active" : "nav-link"} style={{ cursor: "pointer" }}>
                  Works <span className="dropdown-arrow">&#9662;</span>
                </span>
                <ul className={showWorksDropdown ? "works-submenu show" : "works-submenu"}>
                  <li>
                    <a href="/dentalware" className="submenu-link">
                      Current Projects
                    </a>
                  </li>
                  <li>
                    {isHome ? (
                      <Link
                        className="submenu-link"
                        to="section-works"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={() => setShowWorksDropdown(false)}
                      >
                        All Works
                      </Link>
                    ) : (
                      <span
                        className="submenu-link"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setShowWorksDropdown(false);
                          navigate("/?scrollTo=section-works&t=" + Date.now());
                        }}
                      >
                        All Works
                      </span>
                    )}
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                {renderNavLink("section-services", "Service")}
              </li>
              <li className="nav-item">
                {renderNavLink("section-contact", "Contact")}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header3;
