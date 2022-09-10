import { useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase";
import classes from "./Login.module.css";
import Card from "../component/ui/Card";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <Card>
      <div className={classes.form}>
        <div>
          <h3> Login </h3>
          <input
            placeholder="Email..."
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
            placeholder="Password..."
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />

          <button onClick={login}> Login</button>
        </div>

        <h4> User Logged In: </h4>
        {user?.email}

        <button onClick={logout}> Sign Out </button>

        <div>
          <h4>
            Don't have an account? <a href="/register">Register</a>
          </h4>
        </div>
      </div>
    </Card>
  );
}

export default Login;
