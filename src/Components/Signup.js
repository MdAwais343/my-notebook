import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.cpassword) {
      alert("Passwords do not match");
      return;
    }
    const { name, email, password } = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }), // Convert the object to a JSON string
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h5>Name</h5>
          <input
            type="text"
            name="name"
            value={credentials.name}
            onChange={onChange}
          />
        </div>
        <div>
          <h5>E-mail</h5>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={onChange}
          />
        </div>
        <div>
          <h5>Password</h5>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        <div>
          <h5>Confirm Password</h5>
          <input
            type="password"
            name="cpassword"
            value={credentials.cpassword}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="login__signInButton my-3">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
