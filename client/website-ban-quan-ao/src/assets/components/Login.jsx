import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Login() {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email.current.value);
    formData.append("password", password.current.value);
    fetch("http://localhost:3000/server/login.php", {
      method: "POST",
      body: formData,
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) return res.json();
        throw res;
      })
      .then(({ message }) => {
        alert(message);
        navigate("/");
      })
      .catch(() => {
        alert("Sai thông tin đăng nhập");
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" ref={email} placeholder="Email" />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          ref={password}
          placeholder="Password"
        />
        <br />
        <button>Login</button>
      </form>
    </>
  );
}
