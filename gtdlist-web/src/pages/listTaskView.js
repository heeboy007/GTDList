import React, { useState } from "react";

import ListTaskHeader from "./listTaskComponents/listTaskHeader";
import ListTaskCategory from "./listTaskComponents/listTaskCategory";

import './listTaskView.css';

function ListTaskView(props) {
    let tasks = props.tasks;
    console.log(tasks);
    
    return (
        <div className="listTask">
            <ListTaskHeader></ListTaskHeader>
            <ListTaskCategory category={"action"}></ListTaskCategory>
            <section className="defered">
                <div className="category">
                    DEFERED
                </div>
            </section>
        </div>
    );
}

export default ListTaskView;