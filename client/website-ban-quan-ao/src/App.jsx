import { Routes, Route } from "react-router-dom";
import AppContext from "./assets/components/AppContext";
import Home from "./assets/components/Home";
import Login from "./assets/components/Login";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3000/server/me.php", {
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setIsLogin(true);
      })
      .catch();
  }, []);
  return (
    <>
      <AppContext.Provider value={{ user, isLogin, setIsLogin }}>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
