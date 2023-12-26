import { useState } from "react";

import { NavLink } from "react-router-dom";

import './listTaskView.css';
import sample_thumbnail from './temp_samples/member1.jpg';

function ListTaskView(props) {
    let tasks = props.tasks;
    console.log(tasks);
    return (
        <div className="listTask">
            <nav className="header">
                <NavLink className="logoLink" to="/">GTDList</NavLink>
                <div>
                    <NavLink className="menu" to="/menu"><i class="fa-solid fa-bars"></i></NavLink>
                    <NavLink className="thumbnail" to="/profile"><img src={sample_thumbnail} alt="thumbnail"></img></NavLink>
                </div>
            </nav>
            <section>
                funture elements
            </section>
            <section>
                funture elements
            </section>
        </div>
    );
}

export default ListTaskView;