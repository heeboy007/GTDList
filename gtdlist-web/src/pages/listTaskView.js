/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";

import NavigationBar from "./ListTaskComponents/NavigationBar";
import Category from "./ListTaskComponents/Category";

function ListTaskView(props) {
    const [tasks, setTasks] = useState(props.tasks);
    const [newTaskID, setNewTaskId] = useState(props.newTaskID);
    
    const handleChangeCellValue = (category, changedValue, rowId, colId) => {
        const newTasksCategory = tasks[category].map((row) => {
            if(row.id === rowId) {
                return { ...row, [colId]: changedValue };
            }
            return row;
        });
        const newTasks = { ...tasks, [category]: newTasksCategory};
        setTasks(newTasks);
    };

    const handleAddTask = (category) => {
        console.log(newTaskID);
        const newTasksCategory = tasks[category].concat({
            name: '', time:'', memo:'', difficulty:"normal", check:false, id: newTaskID, order: newTaskID
        });
        const newTasks = { ...tasks, [category]: newTasksCategory};
        setTasks(newTasks);
        setNewTaskId(newTaskID + 1);
    };

    const handleDeleteTask = (category, row) => {
        const newTasksCategory = tasks[category].filter(tasks => tasks["id"] !== row);
        const newTask = { ...tasks, [category]: newTasksCategory };
        setTasks(newTask);
    };

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
        <div 
            className="listTask"
            css={css`
                    width: 960px;
                    height: 100%;
                    max-width: 960px;
                    display: flex;
                    flex-direction: column;
                    padding: 0;
                    margin: 0 auto;
                    box-sizing: content-box;
                    background: white;
                    overflow-y: auto;

                    border: 1px solid black; /* will be disabled in the future. */
            `}>
            <NavigationBar />
            <Category 
                category={"action"} 
                tasks={tasks["action"]} 
                editCell={editCell}
                onAddTask={handleAddTask}
                onDeleteTask={handleDeleteTask}
                onChangeCellValue={handleChangeCellValue}
                onEditCellChange={handleEditCellChange}/>
            <Category 
                category={"defered"} 
                tasks={tasks["defered"]} 
                editCell={editCell}
                onAddTask={handleAddTask}
                onDeleteTask={handleDeleteTask}
                onChangeCellValue={handleChangeCellValue}
                onEditCellChange={handleEditCellChange}/>
        </div>
    );
}

export default ListTaskView;