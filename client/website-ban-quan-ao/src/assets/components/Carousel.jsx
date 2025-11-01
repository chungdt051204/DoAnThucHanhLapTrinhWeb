import { useEffect, useRef, useState } from "react";
import category1 from "../../assets/category-1.jpg";
import category2 from "../../assets/category-2.jpg";
import category3 from "../../assets/category-3.jpg";
import category4 from "../../assets/category-4.jpg";
import category5 from "../../assets/category-5.jpg";
import "./Carousel.css";
export default function Carousel() {
  const carousel = useRef();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev < 4) {
          carousel.current.scrollLeft += 1000;
          return prev + 1; //Nếu thỏa thì tăng index lên 1
        } else {
          carousel.current.scrollLeft -= 4000;
          return 0; //Chạy đến cuối quay về đầu reset index vveef 0
        }
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [index]);
  return (
    <>
      <div className="carousel-track" ref={carousel}>
        <div className="carousel-items">
          <img src={category1} alt="" />
        </div>
        <div className="carousel-items">
          <img src={category2} alt="" />
        </div>
        <div className="carousel-items">
          <img src={category3} alt="" />
        </div>
        <div className="carousel-items">
          <img src={category4} alt="" />
        </div>
        <div className="carousel-items">
          <img src={category5} alt="" />
        </div>
      </div>
    </>
  );
}
