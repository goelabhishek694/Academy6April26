import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  }

  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div>
      <header style={{backgroundColor: "#111827", padding: "16px 24px", color: "white", display:"flex", justifyContent:"space-between", alignItems:"center", position:"sticky", top: 0, zIndex: 10}}>
        <div style={{fontSize: "18", fontWeight: "600"}}>Book My Show</div>
        <nav style={{display:"flex", gap: "16px", alignItems:"center"}}>
          <Link to="/" style={{color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "500"}}>Home</Link>
          <button
           type="button"
           onClick={handleLogout}
           style={{
             background: "transparent",
             border: "1px solid rgba(255,255,255,0.35)",
             color: "white",
             padding: "6px 12px",
             borderRadius: 6,
             cursor: "pointer",
             fontWeight: 500,
           }}
         >
           Logout
         </button>
        </nav>
      </header>
      <main style={{padding: "24px"}}>{children}</main>
    </div>
  );
}

export default ProtectedRoute;
