import React, { useState } from "react";

import './listTaskCategory.css';

const tempSampleRows = [
    {id: 1, name: 'task 1', date: "2023-12-27 00:00"},
    {id: 2, name: 'task 2', date: "2023-12-27 00:00"},
]

function capitalize(str) {
    if(!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function ListTaskCategory(props) {
    const category = props.category;
    const [hideTable, setHideTable] = useState(false);

    const [rows, setRows] = useState(tempSampleRows);
    const [editRowId, setEditRowId] = useState(null);

    const handleEdit = (row) => {
        setEditRowId(row.id);
    };

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
        setEditRowId(null);
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
                            <td onClick={() => handleEdit(row)}>
                                {editRowId === row.id ? (
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
                            <td onClick={() => handleEdit(row)}>
                                {editRowId === row.id ? (
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