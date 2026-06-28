import { Link } from "react-router-dom";

function Login() {
  return (
    <div style={{ padding: 40, color: "white" }}>
      <h1>Login</h1>

      <input placeholder="Email" />
      <br /><br />

      <input placeholder="Password" type="password" />
      <br /><br />

      <button>Login</button>

      <p>
        No account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}

export default Login;
