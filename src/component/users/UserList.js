import UserItem from "./UserItem";
import classes from "./UserList.module.css";

function UserList(props) {
  return (
    <ul className={classes.list}>
      {props.users.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          title={user.title}
          address={user.address}
          description={user.description}
        />
      ))}
    </ul>
  );
}

export default UserList;
