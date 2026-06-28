import { Link } from "react-router-dom";

function Signup() {
  return (
    <div style={{ padding: 40, color: "white" }}>
      <h1>Signup</h1>

      <input placeholder="Name" />
      <br /><br />

      <input placeholder="Email" />
      <br /><br />

      <input placeholder="Password" type="password" />
      <br /><br />

      <button>Create Account</button>

      <p>
        Already have account?
        <Link to="/login"> Login</Link>
      </p>
    </div>
  );
}

export default Signup;
