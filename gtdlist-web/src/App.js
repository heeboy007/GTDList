import { NavLink, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import ListView from './pages/listTaskView';
import './App.css';

function App() {
    let [ tasks, setTasks ] = useState({
        action:[
            { name: 'Sample Task 1', time:"2023-12-28 08:10", memo:"Sample 1", difficulty:"normal", check:true, id:0, order:1 },
            { name: 'Sample Task 2', time:"2023-12-28 08:10", memo:"Sample 2", difficulty:"hard", check:true, id:1, order:1 }
        ],
        defered:[
            { name: 'Sample Task 3', time:"2023-12-28 08:10", memo:"Sample 3", difficulty:"normal", check:true, id:2, order:1 },
            { name: 'Sample Task 4', time:"2023-12-28 08:10", memo:"Sample 4", difficulty:"easy", check:false, id:3, order:1 }
        ]
    });

    return (
        <div id='router-root'>
            <Routes>
                <Route path='/' element={
                    <div>
                        Main Page. <br></br>
                        <NavLink to='/listview'>Main List</NavLink>
                    </div>
                } />
                <Route path='/listview' element={<ListView tasks={tasks}></ListView>}/>
            </Routes>
        </div>
    );
}

export default App;
