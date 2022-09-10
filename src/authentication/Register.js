import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import Card from "../component/ui/Card";
import classes from "./Register.module.css";
function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Card>
      <div className={classes.form}>
        <div>
          <h3> Register User </h3>
          <input
            placeholder="Email..."
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          <input
            placeholder="Password..."
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />

          <button onClick={register}> Create User</button>
        </div>
      </div>
    </Card>
  );
}
export default Register;
