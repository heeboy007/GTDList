/** @jsxImportSource @emotion/react */
import { Routes, Route } from 'react-router-dom';
import { css } from '@emotion/react';

import MainView from './pages/MainView';
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
                <Route path='/' Component={MainView}/>
                <Route path='/listview' Component={ListTaskView}/>
            </Routes>
        </div>
    );
}

export default App;
