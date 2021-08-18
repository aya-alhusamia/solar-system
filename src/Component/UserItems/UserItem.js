const UserItem = (props) => {
  return (
    <div>
      <img src={props.userItem.image} />
      <p>{props.userItem.name}</p>
    </div>
  );
};

export default UserItem;
