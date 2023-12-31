import { NavLink } from "react-router-dom";

function MainView() {
    return (
        <div className="mainView">
            hello this is main page!
            <NavLink to='/listview'>Main List</NavLink>
        </div>
    );
}

export default MainView;