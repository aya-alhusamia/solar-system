import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Item from "./Item";

const ItemList = () => {
  const items = useSelector((state) => state.items.items);
 

  const user = useSelector((state) => state.user.user);
  let itemsList = items.map((item) => <Item item={item} key={item.id} />);
  if (!user) return <Redirect to="/" />;

 
  return (
    <>
      <div
        
        style={{
          color: "grey",
          overflow: "auto",

          height: "100vh",
        }}
      >
        {itemsList}
      </div>
    </>
  );
};

export default ItemList;
