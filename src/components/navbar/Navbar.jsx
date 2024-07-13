import { NavLink } from "react-router-dom";
import { BtnDarkMode } from "./../btnDarkMode/BtnDarkMode";
import "./../../styles/main.css";
export function Navbar() {
  const handleActiveLink = ({ isActive }) => {
    const activeLink = "nav-list__link nav-list__link--active";
    const normalLink = "nav-list__link";
    return isActive ? activeLink : normalLink;
  };

  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="nav-row">
            <NavLink to={"/"} className="logo">
              <strong>Freelancer</strong> portfolio
            </NavLink>

            <BtnDarkMode />

            <ul className="nav-list">
              <li className="nav-list__item">
                <NavLink to={"/"} className={handleActiveLink}>
                  Home
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink to={"/projects"} className={handleActiveLink}>
                  Projects
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink to={"/coins"} className={handleActiveLink}>
                  Coins
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
