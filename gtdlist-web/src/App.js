import { NavLink, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import ListView from './pages/listVew';
import './App.css';

function App() {
    let [ tasks, setTasks ] = useState([
        { name: 'Sample Task1', time:"whatever", memo:"Sample", difficulty:"normal", check:true, category:"ACTION", uid:8888, order:1 }
    ]);
    return (
        <Routes>
            <Route path='/' element={
                <div>
                    Main Page. <br></br>
                    <NavLink to='/listview'>Main List</NavLink>
                </div>
            } />
            <Route path='/listview' element={<ListView tasks={tasks}></ListView>}/>
        </Routes>
    );
}

export default App;
