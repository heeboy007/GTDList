import React, { useState } from "react";

import NavigationBar from "./ListTaskComponents/NavigationBar";
import Category from "./ListTaskComponents/Category";

import './ListTaskView.css';

function ListTaskView(props) {
    let tasks = props.tasks;
    
    const [editCell, setEditRowId] = useState({
        rowId: null,
        colId: null
    });

    const handleEditCellChange = (row, col) => {
        setEditRowId({
            rowId: (row === null ? null : row.id),
            colId: col
        });
    };

    return (
        <div className="listTask">
            <NavigationBar />
            <Category 
                category={"action"} 
                tasks={tasks["action"]} 
                editCell={editCell}
                onEditCellChange={handleEditCellChange}/>
            <Category 
                category={"defered"} 
                tasks={tasks["defered"]} 
                editCell={editCell}
                onEditCellChange={handleEditCellChange}/>
        </div>
    );
}

export default ListTaskView;