import { Link } from "react-router-dom";
import "./NavBar.css";
export default function NavBar() {
  return (
    <>
      <h1>An ba to com</h1>
      <h1>Hello Nigga</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Logo</Link>
          </li>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link>WOMEN'S</Link>
          </li>
          <li>
            <Link>MEN'S</Link>
          </li>
          <li>
            <Link>SHOP</Link>
          </li>
          <li>
            <Link>PAGES</Link>
          </li>
          <li>
            <button>Login</button>
          </li>
          <li>
            <Link>
              <div>
                <input type="text" />
              </div>
            </Link>
          </li>
          <li>
            <Link>Icon Trái tim</Link>
          </li>
          <li>
            <Link>Icon Giỏ hàng</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
