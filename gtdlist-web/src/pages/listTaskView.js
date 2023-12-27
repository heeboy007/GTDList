import { useState } from "react";

import './listTaskView.css';

import ListTaskHeader from "./listTaskComponents/listTaskHeader";

function ListTaskView(props) {
    let tasks = props.tasks;
    console.log(tasks);

    let [categoriesClosed, setCategoriesClosed] = useState({
        action: true,
        defered: true
    });

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
                <div className="taskColumn">

                </div>
                <div className="task">
                    
                </div>
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