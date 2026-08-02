import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  // 1. Simple state to track the user. Starts as "Guest" (not logged in).
  const [userRole, setUserRole] = useState("Guest");

  // --- VERY SIMPLE PAGE COMPONENTS ---

  // Home Page (Anyone can see this)
  function HomePage() {
    return (
      <div>
        <h2>Home Page</h2>
        <p>Welcome! This page is public.</p>
      </div>
    );
  }

  // Login Page (Sets the role)
  function LoginPage() {
    function loginAsAdmin() {
      setUserRole("Admin");
    }

    function loginAsViewer() {
      setUserRole("Viewer");
    }

    return (
      <div>
        <h2>Login Page</h2>
        <button onClick={loginAsAdmin}>Log in as Admin</button>
        <br /><br />
        <button onClick={loginAsViewer}>Log in as Viewer</button>
      </div>
    );
  }

  // Dashboard Page (Protected!)
  function DashboardPage() {
    // SECURITY CHECK: If they are a Guest, stop them right here.
    if (userRole === "Guest") {
      return <h2>Access Denied! You must log in first.</h2>;
    }

    // If they pass the check, show the dashboard:
    return (
      <div>
        <h2>Protected Dashboard</h2>
        <p>You are successfully logged in.</p>
        <p>Your role is: <strong>{userRole}</strong></p>

        {/* RBAC LOGIC: Show button ONLY if Admin */}
        {userRole === "Admin" && (
          <button>Delete Database (Admin Only!)</button>
        )}
      </div>
    );
  }

  // --- MAIN APP LAYOUT ---
  
  function logout() {
    setUserRole("Guest");
  }

  return (
    <BrowserRouter>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        
        {/* Simple Navigation Links */}
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/login"> Login</Link> | 
          <Link to="/dashboard"> Dashboard</Link> | 
          <button onClick={logout} style={{ marginLeft: "10px" }}>Logout</button>
        </nav>

        <hr />

        {/* Very Simple Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;