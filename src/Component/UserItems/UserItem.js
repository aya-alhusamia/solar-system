import { useSelector } from "react-redux";
import { useDrag } from "react-dnd";
import { useDrop } from 'react-dnd';
import React, { useState } from 'react'
import Orbits from "./Orbits/Orbits";
const UserItem = (props) => {
  const items = useSelector((state) => state.items.items);
  console.log(items, "iteeeeeeeeeeeeeeeems");
  const specificItem = items.find((item) => item.id === props.userItem?.itemId);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: specificItem?.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))


  return (
    <>
      <div className="it">
        <h3>{props.userItem?.name}</h3>
        <img className="item-image"
          ref={drag}
          src={specificItem?.image}
          style={{ border: isDragging ? "5px solid pink" : "0px" }}
        />

      </div>
    </>
  );
};

export default UserItem;
