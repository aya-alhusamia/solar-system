import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
//Components
import UserItem from "./UserItem";
import Orbits from "./Orbits/Orbits";
//Style
import "./style.css";
const UserItemList = () => {
  const userItems = useSelector((state) => state.userItems.userItems);
  const user = useSelector((state) => state.user.user);

  let userItemsList = userItems.map((userItem) => (
    <UserItem userItem={userItem} key={userItem.id} />
  ));
  const e = userItemsList[0].props;
  console.log(e);

  if (!user) return <Redirect to="/" />;

  const allowDrop = (e) => {
    e?.preventDefault();
    console.log("allow drop", e);
  };

  const drag = (e) => {
    e?.dataTransfer.setData("text", e.target.id);
    console.log("drag", e);
  };

  const drop = (e) => {
    e?.preventDefault();
    let data = e?.dataTransfer.getData("text");
    e?.target.appendChild(document.getElementById(data));
    console.log("drop", e);
  };

  return (
    <div className="item-list">
      <Orbits id="div1" onDrop={drop()} onDragOver={allowDrop()} />
      <div id="drag1" draggable="true" onDragStart={drag()}>
        {userItemsList}
      </div>
    </div>
  );
};

export default UserItemList;
