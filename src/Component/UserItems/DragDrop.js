import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { useDrop } from 'react-dnd';
import "./style.css"
//Components
import UserItem from "./UserItem";
import Orbits from "./Orbits/Orbits";
import Picture from "./Picture"
function DragDrop() {
    const userItems = useSelector((state) => state.userItems.userItems);
    const user = useSelector((state) => state.user.user);
    let userItemsList = userItems.map((userItem) => (
        <UserItem userItem={userItem} key={userItem.id} />
    ));
    // console.log(userItemsList[0].props.userItem.itemId);
    // const items = useSelector((state) => state.items.items);
    // const specificItem = userItemsList.find((item) => item.id === userItem?.itemId);
    // const specificItem = userItems.find()
    // const [board, setBoard] = useState([])

    // const [{ isOver }, drop] = useDrop(() => ({
    //     accept: "image",
    //     drop: (item) => addImageToBoard(item.id),
    //     collect: (monitor) => ({
    //         isOver: !!monitor.isOver()
    //     })
    // }))

    // const addImageToBoard = (id) => {
    //     console.log(id);
    //     const picturList = userItemsList.filter((userItem) => id === userItem.id)
    //     console.log("picturList", picturList);
    //     setBoard((board) => [...board, picturList[0]])


    // }

    return (
        <>

            <div className="pictures">{userItemsList}
            </div>
            <div className="bord"  >
                {/* {
                    board.map((picture) => {
                        return <UserItem id={picture?.id} />
                    })
                } */}
            </div>
        </>
    )
}

export default DragDrop
