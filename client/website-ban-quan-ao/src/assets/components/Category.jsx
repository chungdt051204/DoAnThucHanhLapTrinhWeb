import { Link } from "react-router-dom";
import "./Category.css";
export default function Category() {
  return (
    <>
    <h1>hello </h1>
      <section className="category">
        <div className="category-track1">
          <div>
            <div>
              <h1>Women’s fashion</h1>
              <p>
                Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
                incidid-unt labore edolore magna aliquapendisse ultrices
                gravida.
              </p>
              <Link>
                <p>Shop now</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="category-track2">
          <div className="category-item item1">
            <div>
              <h4>Men’s fashion</h4>
              <p>358 items</p>
              <Link>
                <p>Shop now</p>
              </Link>
            </div>
          </div>
          <div className="category-item item2">
            <div>
              <h4>Kid’s fashion</h4>
              <p>273 items</p>
              <Link>
                <p>Shop now</p>
              </Link>
            </div>
          </div>
          <div className="category-item item3">
            <div>
              <h4>Cosmetics</h4>
              <p>159 items</p>
              <Link>
                <p>Shop now</p>
              </Link>
            </div>
          </div>
          <div className="category-item item4">
            <div>
              <h4>Accessories</h4>
              <p>792 items</p>
              <Link>
                <p>Shop now</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
