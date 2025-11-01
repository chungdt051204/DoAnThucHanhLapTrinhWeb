import React from "react";
import "./Product1.css";
import product1 from "../../assets/product-1.jpg";
import product2 from "../../assets/product-2.jpg";
import product3 from "../../assets/product-3.jpg";
import product4 from "../../assets/product-4.jpg";
import product5 from "../../assets/product-5.jpg";
import product6 from "../../assets/product-6.jpg";
import product7 from "../../assets/product-7.jpg";
import product8 from "../../assets/product-8.jpg";
export default function Product1() {
  return (
    <>
      <section class="product-grid">
        <div class="product-item">
          <img src={product1} alt="" />
          <h3>Buttons tweed blazer</h3>
          <div class="rating">★★★★★</div>
          <p class="price">$59.0</p>
        </div>

        <div class="product-item">
          <img src={product2} alt="" />
          <h3>Flowy striped skirt</h3>
          <div class="rating">★★★★★</div>
          <p class="price">$49.0</p>
        </div>

        <div class="product-item">
          <img src={product3} alt="" />
          <h3>Cotton T-Shirt</h3>
          <div class="rating">★★★★★</div>
          <p class="price">$59.0</p>
        </div>

        <div class="product-item">
          <img src={product4} alt="" />
          <h3>Slim striped pocket shirt</h3>
          <div class="rating">★★★★★</div>
          <p class="price">$59.0</p>
        </div>

        <div class="product-item">
          <img src={product5} alt="" />
          <h3>Fit micro corduroy shirt</h3>
          <div class="rating">★★★★★</div>
          <p class="price">$59.0</p>
        </div>

        <div class="product-item">
          <img src={product6} alt="" />
          <h3>Tropical Kimono</h3>
          <div class="rating">★★★★★</div>
          <p class="price">
            <span class="old">$59.0</span> $49.0
          </p>
        </div>

        <div class="product-item">
          <img src={product7} alt="" />
          <h3>Contrasting sunglasses</h3>
          <div class="rating">★★★★★</div>
          <p class="price">$59.0</p>
        </div>

        <div class="product-item">
          <img src={product8} alt="" />
          <h3>Water resistant backpack</h3>
          <div class="rating">★★★★★</div>
          <p class="price">
            <span class="old">$59.0</span> $49.0
          </p>
        </div>
      </section>
    </>
  );
}
