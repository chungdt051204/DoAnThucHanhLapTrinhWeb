import { useContext } from "react";
import AppContext from "./AppContext";
import Carousel from "./Carousel";
import Category from "./Category";
import NavBar from "./NavBar";
import Product from "./Product";
import Product1 from "./Product1";
export default function Home() {
  const { user, isLogin } = useContext(AppContext);
  return (
    <>
      <NavBar />
      {isLogin && <h2>Xin chào {user.email}</h2>}
      <Category />
      <Product />
      <Product1 />
      <Carousel />
    </>
  );
}
