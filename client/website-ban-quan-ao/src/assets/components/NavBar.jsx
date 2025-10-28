import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "./logo.png";
export default function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">
              <p>HOME</p>
            </Link>
          </li>
          <li>
            <Link>
              <p>WOMEN'S</p>
            </Link>
          </li>
          <li>
            <Link>
              <p>MEN'S</p>
            </Link>
          </li>
          <li>
            <Link>
              <p>SHOP</p>
            </Link>
          </li>
          <li>
            <Link>
              <p>PAGES</p>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link>
              <div>
                <input type="text" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <p>LOGIN</p>
            </Link>
          </li>
          <li>
            <Link>
              <i className="fa-regular fa-heart"></i>
            </Link>
          </li>
          <li>
            <Link>
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
