import { useSelector } from "react-redux";
import { useDrag } from "react-dnd";
import { useDrop } from 'react-dnd';
import React, { useState } from 'react'
const UserItem = (props) => {
  const items = useSelector((state) => state.items.items);
  const specificItem = items.find((item) => item.id === props.userItem?.itemId);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: specificItem?.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))
  //Drop
  const [board, setBoard] = useState([])

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: { id: specificItem?.id },
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }))

  // const addImageToBoard = (id) => {
  //     console.log(id);
  //     const picturList = userItemsList.filter((userItem) => id === userItem.id)
  //     console.log("picturList", picturList);
  //     setBoard((board) => [...board, picturList[0]])


  // }

  return (
    <>
      <div className="it">
        {/* <h3>{props.userItem?.name}</h3> */}
        <img className="item-image"
          ref={drag}
          src={specificItem?.image}
          style={{ border: isDragging ? "5px solid pink" : "0px" }}
        />
      </div>
      <div className="bord"  >
        <img ref={drop} />
      </div>
    </>
  );
};

export default UserItem;
