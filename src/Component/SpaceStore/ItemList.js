import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import Item from "./Item";

const ItemList = () => {
  const items = useSelector((state) => state.items.items);


  const user = useSelector((state) => state.user.user);
  let itemsList = items.map((item) => <Item item={item} key={item.id} />);
  if (!user) return <Redirect to="/" />;


  return (
    <div className="aa">
      <div className="list">
        {itemsList}
      </div>
      <AiOutlineArrowRight
        size="5em"
        color="#f8f9fa"
      />

    </div>
  );
};

export default ItemList;
