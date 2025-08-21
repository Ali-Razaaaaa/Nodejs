import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboard = async () => {
      try
      {
        const token = localStorage.getItem("token");
        if (!token)
        {
          alert("JA PEHLY TOKEN LE AA TERI MAA KI ANKH");
        }

       const response= await fetch("http://localhost:5000/dashboard",
        {
          headers:{Authorization:`Bearer ${token}`}
        }
       );

        if (!response.ok) throw new Error("Unauthorized");

        const data = await response.json();
        setMessage(data.message);
      } catch (err) {
        console.error(err);
        navigate("/login"); 
      }
    };

    fetchDashboard();
  }, [navigate]);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>{message || "Loading..."}</p>
    </div>
  );
}
