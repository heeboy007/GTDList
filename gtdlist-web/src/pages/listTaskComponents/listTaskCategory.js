import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';

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
            { hideTable ? "" : <TableContainer className="taskTable" component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableCell>Name</TableCell>
                        <TableCell>Date</TableCell>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>
                                    {editRowId === row.id ? (
                                        <TextField 
                                            value={row.name}
                                            onChange={(e) => handleChange(e, row.id, 'name')}
                                            onBlur={handleBlur}
                                        />
                                    ) : (
                                        <span onClick={() => handleEdit(row)}>
                                            {row.name}
                                        </span>
                                    )}
                                </TableCell>
                                <TableCell>
                                    {editRowId === row.id ? (
                                        <TextField 
                                            value={row.date}
                                            onChange={(e) => handleChange(e, row.id, 'date')}
                                            onBlur={handleBlur}
                                        />
                                    ) : (
                                        <span onClick={() => handleEdit(row)}>
                                            {row.date}
                                        </span>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>}
        </section>
    );
}

export default ListTaskCategory;