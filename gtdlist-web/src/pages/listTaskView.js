import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';

import ListTaskHeader from "./listTaskComponents/listTaskHeader";

import './listTaskView.css';

const tempSampleRows = [
    {id: 1, name: 'task 1', date: "2023-12-27 00:00"},
    {id: 2, name: 'task 2', date: "2023-12-27 00:00"},
]

function ListTaskView(props) {
    let tasks = props.tasks;
    console.log(tasks);

    const [categoriesClosed, setCategoriesClosed] = useState({
        action: true,
        defered: true
    });

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
        <div className="listTask">
            <ListTaskHeader></ListTaskHeader>
            <section className="action">
                <div className="category">
                    ACTION
                    <button className="addTask" data-category="action" onClick={(e) => {
                        alert("addTask");
                    }}><i className="fa-solid fa-plus"></i></button>
                    <button className="closeTask" data-category="action" onClick={(e) => {
                        let category = e.currentTarget.dataset.category;
                        setCategoriesClosed({
                            [category]: !categoriesClosed[category]
                        });
                    }}><i className={"fa-solid fa-caret-down" + (categoriesClosed["action"] ? " closed" : "")}></i></button>
                </div>
                <TableContainer component={Paper}>
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
                </TableContainer>
            </section>
            <section className="defered">
                <div className="category">
                    DEFERED
                </div>
            </section>
        </div>
    );
}

export default ListTaskView;