import { Link } from "react-router-dom";
import "./Category.css";
export default function Category() {
  return (
    <>
      <section className="category">
        <div className="category-track1">
          <div className="ct1">
            <div>
              <h1>Women’s fashion</h1>
              <p>
                Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
                incidid-unt labore edolore magna aliquapendisse ultrices
                gravida.
              </p>
              <Link className="shop">
                <p>SHOP NOW</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="category-track2">
          <div className="category-item item1">
            <div className="ct2">
              <h2>Men’s fashion</h2>
              <p>358 items</p>
              <Link className="shop">
                <p>SHOP NOW</p>
              </Link>
            </div>
          </div>
          <div className="category-item item2">
            <div className="ct3">
              <h2>Kid’s fashion</h2>
              <p>273 items</p>
              <Link className="shop">
                <p className="shop">SHOP NOW</p>
              </Link>
            </div>
          </div>
          <div className="category-item item3">
            <div className="ct4">
              <h2>Cosmetics</h2>
              <p>159 items</p>
              <Link className="shop">
                <p>SHOP NOW</p>
              </Link>
            </div>
          </div>
          <div className="category-item item4">
            <div className="ct5">
              <h2>Accessories</h2>
              <p>792 items</p>
              <Link className="shop">
                <p>SHOP NOW</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
