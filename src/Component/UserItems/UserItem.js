import { useSelector } from "react-redux";

const UserItem = (props) => {
  const items = useSelector((state) => state.items.items);
  const specificItem = items.find((item) => item.id === props.userItem.itemId);
  return (
    <div className="it">
      <h3>{props.userItem.name}</h3>
      <img className="image" src={specificItem?.image} />
    </div>
  );
};

export default UserItem;
