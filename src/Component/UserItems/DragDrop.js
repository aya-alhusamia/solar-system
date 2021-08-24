import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import { useDrop } from 'react-dnd';
import "./style.css"
//Components
import UserItem from "./UserItem";
import Orbits from "./Orbits/Orbits";
function DragDrop() {
    const userItems = useSelector((state) => state.userItems.userItems);
    console.log(userItems);
    const user = useSelector((state) => state.user.user);
    // const userItemsList = userItems.map((userItem) => (
    //     <UserItem userItem={userItem} key={userItem.id} />
    // ));
    // console.log(userItemsList[0].props.userItem.itemId);

    const [board, setBoard] = useStickyState([])
    // const [board, setBoard] = useState([])
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
    let [system, setSystem] = useState([])
    const esraa = board.map((picture, index) =>
        < UserItem key={index} userItem={picture}  >
        </UserItem>
    )
    // function useStickyState([], usersolarsystem) {
    //     const [board, setBoard] = React.useState(() => {
    //         const stickyValue = window.localStorage.getItem(usersolarsystem);
    //         return stickyValue !== null
    //             ? JSON.parse(stickyValue)
    //             : [];
    //     });
    //     React.useEffect(() => {
    //         window.localStorage.setItem(usersolarsystem, JSON.stringify(board));
    //     }, [usersolarsystem, board]);
    //     return [board, setBoard];
    // }
    // const stickyValue = window.localStorage.getItem(key);
    // return (stickyValue !== null
    //     ? JSON.parse(stickyValue)
    //     : defaultValue)

    // useEffect(() => {
    //     window.localStorage.getItem(key, json.stringify(value))
    //     const json = localStorage.getItem("usersolarsystem");
    //     const esraa = JSON.parse(json);
    //     if (esraa) {
    //         setBoard(esraa);
    //     }
    // }, [key, value]);
    return (
        <div className="wee" >
            <div className="bord" ref={drop} >
                {esraa}
            </div>
            <div className="pictures"  >{userItems.map((userItem, index) => (
                <UserItem userItem={userItem} key={index} />
            ))}

            </div>


        </div>
    )
}

export default DragDrop
