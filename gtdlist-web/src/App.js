import { NavLink, Routes, Route } from 'react-router-dom';

import ListView from './pages/listVew';
import './App.css';

function App() {
    return (
        <Routes>
            <Route path='/' element={
                <div>
                    Main Page. <br></br>
                    <NavLink to='/listview'>Main List</NavLink>
                </div>
            } />
            <Route path='/listview' Component={ListView}/>
        </Routes>
    );
}

export default App;
