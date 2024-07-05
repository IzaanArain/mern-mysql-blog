import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <>
      <div className="auth">
        <h1>Register</h1>
        <form>
          <input
            required
            autocomplete="off"
            type="text"
            placeholder="username"
            id="username"
          />
          <input
            required
            autocomplete="off"
            type="email"
            placeholder="email"
            id="email"
          />
          <input
            required
            type="password"
            placeholder="password"
            id="password"
            name="password"
          />
          <input
            required
            type="password"
            placeholder="confirm password"
            id="confirmPassword"
            name="confirmPassword"
          />
          <button>register</button>
          <p className="error">This is an error!</p>
          <span>
            Already have an account? <Link to={"/login"}>Login</Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default Register;
