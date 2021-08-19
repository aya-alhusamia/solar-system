import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
//Components
import UserItem from "./UserItem";
import Orbits from "./Orbits/Orbits";
//Style
import "./style.css"
const UserItemList = () => {
  const userItems = useSelector((state) => state.userItems.userItems);
  console.log("userItems", userItems);
  const user = useSelector((state) => state.user.user);

  let userItemsList = userItems.map((userItem) => (
    <UserItem userItem={userItem} key={userItem.id} />
  ));
  if (!user) return <Redirect to="/" />;

  return (
    <div className="item-list">
      <Orbits />
      {userItemsList}
    </div>
  );
};

export default UserItemList;
