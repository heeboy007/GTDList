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
                @font-face {
                    font-family: 'S-CoreDream-3Light';
                    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
                    font-weight: normal;
                    font-style: normal;
                }
            `}>
            <Routes>
                <Route path='/' Component={MainView}/>
                <Route path='/listview' Component={ListTaskView}/>
            </Routes>
        </div>
    );
}

export default App;
