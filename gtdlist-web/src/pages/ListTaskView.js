/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { format } from "date-fns";

import Category from "./ListTaskComponents/Category";

function ListTaskView() {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if ((event.ctrlKey || event.metaKey) && event.key === 's') {
                event.preventDefault();
                //future "save function" must be here.
            }
        };

        const handleContextMenu = (event) => {
            event.preventDefault();
        };

        window.addEventListener('contextmenu', handleContextMenu);
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('contextmenu', handleContextMenu);
        };
    }, []);

    const [ tasks, setTasks ] = useState({
        action:[
            { name: 'Sample Task 1', time:"2023-12-28 08:10", memo:"Sample 1", difficulty:"normal", check:true, id:0, order:1 },
            { name: 'Sample Task 2', time:"2023-12-28 08:10", memo:"Sample 2", difficulty:"hard", check:true, id:1, order:1 }
        ],
        defered:[
            { name: 'Sample Task 3', time:"2023-12-28 08:10", memo:"Sample 3", difficulty:"normal", check:true, id:2, order:1 },
            { name: 'Sample Task 4', time:"2023-12-28 08:10", memo:"Sample 4", difficulty:"easy", check:false, id:3, order:1 }
        ]
    });
    const [newTaskID, setNewTaskId] = useState(5);
    
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
        const newTime = format(new Date(), 'yyyy-MM-dd HH:mm')
        const newTasksCategory = tasks[category].concat({
            name: '', time:newTime, memo:'', difficulty:"normal", check:false, id: newTaskID, order: newTaskID
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
            `}>
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