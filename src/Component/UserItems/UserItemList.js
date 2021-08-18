import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import UserItem from "./UserItem";

const UserItemList = () => {
  const userItems = useSelector((state) => state.userItems.userItems);
  console.log("userItems", userItems);
  const user = useSelector((state) => state.user.user);

  let userItemsList = userItems.map((userItem) => (
    <UserItem userItem={userItem} key={userItem.id} />
  ));
  if (!user) return <Redirect to="/" />;

  return (
    <div
      style={{
        color: "grey",
        overflow: "auto",

        height: "80vh",
      }}
    >
      {userItemsList}
    </div>
  );
};

export default UserItemList;
