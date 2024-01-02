/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { css } from "@emotion/react";

import Category from "./ListTaskComponents/Category";

function TaskView() {
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
                editCell={editCell}
                onEditCellChange={handleEditCellChange}/>
            <Category 
                category={"defered"} 
                editCell={editCell}
                onEditCellChange={handleEditCellChange}/>
        </div>
    );
}

export default TaskView;