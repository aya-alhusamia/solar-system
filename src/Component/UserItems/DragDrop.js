import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import { useDrop } from 'react-dnd';
import "./style.css"
//Components
import UserItem from "./UserItem";
function DragDrop() {
    const userItems = useSelector((state) => state.userItems.userItems);


    const [board, setBoard] = useState([])
    // const [board, setBoard] = useStickyState([])
    function useStickyState(defaultValue, key) {
        const [value, setValue] = React.useState(() => {
            const stickyValue = window.localStorage.getItem(key);
            return stickyValue !== null
                ? JSON.parse(stickyValue)
                : defaultValue;
        });
        React.useEffect(() => {
            window.localStorage.setItem(key, JSON.stringify(value));
        }, [key, value]);
        return [value, setValue];
    }


    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const addImageToBoard = (id) => {
        console.log(userItems);
        const picturList = userItems.filter((userItem) => id === userItem.itemId)
        console.log("picturList", picturList);
        setBoard((board) => [...board, picturList[0]])


    }
    // const esraa = board.map((picture, index) =>
    //     < UserItem key={index} userItem={picture}  >
    //     </UserItem>
    // )

    return (
        <div className="wee" >
            <div className="bord" ref={drop} >
                {
                    board.map((picture, index) =>

                        <UserItem key={index} userItem={picture} />
                    )}

            </div>
            <div className="pictures"  >{userItems.map((userItem, index) => (
                <UserItem userItem={userItem} key={index} />
            ))}

            </div>


        </div>
    )
}

export default DragDrop
