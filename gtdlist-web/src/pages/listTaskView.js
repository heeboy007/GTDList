import React, { useState } from "react";

import ListTaskHeader from "./listTaskComponents/listTaskHeader";
import ListTaskCategory from "./listTaskComponents/listTaskCategory";

import './listTaskView.css';

const tempSampleRowsAction = [
    {id: 1, name: 'task 1', date: "2023-12-27 00:00"},
    {id: 2, name: 'task 2', date: "2023-12-27 00:00"},
]

const tempSampleRowsDefered = [
    {id: 3, name: 'task 3', date: "2023-12-27 00:00"},
    {id: 4, name: 'task 4', date: "2023-12-27 00:00"},
]

function ListTaskView(props) {
    let tasks = props.tasks;
    console.log(tasks);
    
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
            <ListTaskHeader></ListTaskHeader>
            <ListTaskCategory 
                category={"action"} 
                tasks={tempSampleRowsAction} 
                editCell={editCell}
                onEditCellChange={handleEditCellChange}/>
            <ListTaskCategory 
                category={"defered"} 
                tasks={tempSampleRowsDefered} 
                editCell={editCell}
                onEditCellChange={handleEditCellChange}/>
        </div>
    );
}

export default ListTaskView;