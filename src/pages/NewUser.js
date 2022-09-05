import { useNavigate } from "react-router-dom";

import NewUserForm from "../component/users/NewUserForm";

function NewUserPage() {
  const navigate = useNavigate();

  function addUserHandler(userData) {
    fetch(
      "https://kopsa-ec0cc-default-rtdb.europe-west1.firebasedatabase.app/users.json",
      {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/", { replace: true });
    });
  }
  return (
    <section>
      <h1>Add New Item</h1>
      <NewUserForm onAddUser={addUserHandler} />
    </section>
  );
}

export default NewUserPage;
