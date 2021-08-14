const Item = (props) => {
  return (
    <div>
      <p>{props.item.category}</p>
      <img src={props.item.image} />
      <p>{props.item.name}</p>
      <p>{props.item.price} $</p>
    </div>
  );
};

export default Item;
