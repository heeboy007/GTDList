import { NavLink } from "react-router-dom";

import './listTaskHeader.css';

import sample_thumbnail from '../temp_samples/member1.jpg';

function ListTaskHeader() {
    return (
        <nav className="header">
            <NavLink className="logoLink" to="/">GTDList</NavLink>
            <div>
                <NavLink className="menu" to="/menu"><i className="fa-solid fa-bars"></i></NavLink>
                <NavLink className="thumbnail" to="/profile"><img src={sample_thumbnail} alt="thumbnail"></img></NavLink>
            </div>
        </nav>
    );
}

export default ListTaskHeader;