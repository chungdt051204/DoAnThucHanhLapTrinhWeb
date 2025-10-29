import { Link } from "react-router-dom";
import "./Product.css";
export default function Product() {
    return (
        <>
            <section class="new-product-section">
                <div class="container">
                    <div class="title">
                        <h2>NEW PRODUCT</h2>
                        <div class="underline"></div>
                    </div>
                    <ul class="categories">
                        <li class="active">
                            <Link>
                                <p>All</p>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <p>Women's</p>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <p>Men's</p>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <p>Kid's</p>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <p>Accessories</p>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <p>Cosmetics</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}
