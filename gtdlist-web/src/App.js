/** @jsxImportSource @emotion/react */
import { NavLink, Routes, Route } from 'react-router-dom';
import { css } from '@emotion/react';

import ListTaskView from './pages/ListTaskView';

function App() {
    return (
        <div 
            id='router-root'
            css={css`
                width: 100vw;
                height: 100vh;
                background-color: #eee;
            `}>
            <Routes>
                <Route path='/' element={
                    <div>
                        Main Page. <br></br>
                        <NavLink to='/listview'>Main List</NavLink>
                    </div>
                }/>
                <Route path='/listview' Component={ListTaskView}/>
            </Routes>
        </div>
    );
}

export default App;
