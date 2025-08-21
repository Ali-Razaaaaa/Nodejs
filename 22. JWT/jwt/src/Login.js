import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      
      if (response.ok) {
        alert("Login successful");
        localStorage.setItem("token", data.token);
        navigate('/Dashboard');
      } else {
        alert(data.error || "Login failed");
      }
    } catch (err) {
      console.error("Error:", err);
      alert(err);
    }
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={goToRegister} style={{ marginTop: "10px" }}>
        Go to Register
      </button>
    </div>
  );
}
