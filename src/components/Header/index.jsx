import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="hover:surface-900">
        <div className="menu">M</div>
        <div className="logo">
          <div className="logo-icon"></div>
          MFC
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Início</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
