import React, { useState } from "react";

import './listTaskCategory.css';

function capitalize(str) {
    if(!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function ListTaskCategory(props) {
    const category = props.category;
    const editCell = props.editCell;
    const handleEditCellChange = props.onEditCellChange;
    const [hideTable, setHideTable] = useState(false);

    const [rows, setRows] = useState(props.tasks);

    const handleChange = (e, id, fieldName) => {
        const newRows = rows.map((row) => {
            if(row.id === id) {
                return { ...row, [fieldName]: e.target.value };
            }
            return row;
        });
        setRows(newRows);
    };

    const handleBlur = () => {
        handleEditCellChange(null, null);
    };

    return (
        <section className={category}>
            <div className="category">
                {category.toUpperCase()}
                <button className="addTask" data-category="action" onClick={(e) => {
                    alert("addTask");
                }}><i className="fa-solid fa-plus"></i></button>
                <button className="closeTask" onClick={(e) => {
                    setHideTable(!hideTable);
                }}><i className={"fa-solid fa-caret-down" + (hideTable ? " closed" : "")}></i></button>
            </div>
            { hideTable ? "" : <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Date</td>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.id}>
                            <td onClick={() => handleEditCellChange(row, 'name')}>
                                {editCell.rowId === row.id && editCell.colId === 'name' ? (
                                    <input 
                                        value={row.name}
                                        onChange={(e) => handleChange(e, row.id, 'name')}
                                        onBlur={handleBlur}
                                        onKeyDown={(e) => {
                                            if(e.key === "Enter")
                                                handleBlur();
                                        }}
                                    />
                                ) : (
                                    row.name
                                )}
                            </td>
                            <td onClick={() => handleEditCellChange(row, 'date')}>
                                {editCell.rowId === row.id && editCell.colId === 'date' ? (
                                    <input 
                                        value={row.date}
                                        onChange={(e) => handleChange(e, row.id, 'date')}
                                        onBlur={handleBlur}
                                        onKeyDown={(e) => {
                                            if(e.key === "Enter")
                                                handleBlur();
                                        }}
                                    />
                                ) : (
                                    row.date
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>}
        </section>
    );
}

export default ListTaskCategory;