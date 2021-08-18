import { useSelector } from "react-redux";




const UserItem = (props) => {
  const items = useSelector((state) => state.items.items);
const specificItem = items.find((item)=> item.id=== props.userItem.itemId)
console.log(specificItem)
  return (
    <div>
      <img src={specificItem.image} />
      <p>{props.userItem.name}</p>
    </div>
  );
};

export default UserItem;
