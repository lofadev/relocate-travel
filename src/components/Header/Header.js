import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const menuRef = useRef();
  const handleToggleMenu = () => {
    setIsShow((prev) => !prev);
  };

  const handleGoToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (isShow) {
      menuRef.current.classList.add("show");
    } else {
      menuRef.current.classList.remove("show");
    }
  }, [isShow]);

  const handleSetShowMenu = () => {
    if (window.innerWidth >= 1024) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleSetShowMenu);

    return () => {
      window.removeEventListener("resize", handleSetShowMenu);
    };
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="header-home">
          <Link to="/" onClick={handleGoToTop}>
            relocate
          </Link>
        </div>

        <div className="header-link">
          <ul className="menu" ref={menuRef}>
            <li className="menu-items">
              <Link to="/destinations">Destinations</Link>
            </li>
            <li className="menu-items">
              <Link to="/deals">Deals</Link>
            </li>
            <li className="menu-items">
              <Link to="/explore">Explore</Link>
            </li>
            <li className="menu-items">
              <Link to="/resources">Resources</Link>
            </li>
          </ul>
          <div className="btn-menu" onClick={handleToggleMenu}>
            <div className="btn-inner">
              <span className="firstline"></span>
              <span className="secondline"></span>
              <span className="thirdline"></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
