import React from 'react'
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
//Components
import DragDrop from './DragDrop'
import UserItem from './UserItem'
function Test() {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="a">
                <DragDrop />
                {/* <DnD /> */}
            </div>
        </DndProvider>

    )
}

export default Test
