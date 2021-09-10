import './style.css'
import logo from "../../assets/netflix-logo.svg";
import {FaSearch, FaBell} from 'react-icons/fa';
import profileIcon from "../../assets/profile-icon.png";
function Header() {
  return (
    <header className="header">
      <div className="left">
        <img src={logo} alt="Logo" className="logo" />
        <ul className="nav">
          <li>
            <a href="https://www.netflix.com/browse">Inicio</a>
          </li>
          <li>
            <a href="https://www.netflix.com/browse">Séries</a>
          </li>
          <li>
            <a href="https://www.netflix.com/browse">Filmes</a>
          </li>
          <li>
            <a href="https://www.netflix.com/browse">Bombando</a>
          </li>
          <li>
            <a href="https://www.netflix.com/browse">Minha Lista</a>
          </li>
          <li>
            <a href="https://www.netflix.com/browse">Assista de novo</a>
          </li>
        </ul>
      </div>
      <div className="right">
        <FaSearch className="lupa" color="white" size={22} />
        <a
          className="infantil"
          href="https://react-icons.github.io/react-icons"
        >
          INFANTIL
        </a>
        <FaBell className="sino" color="white" size={22} />
        <img src={profileIcon} alt="Logo" className="profileIcon" />
      </div>
    </header>
  );
}
export default Header;
