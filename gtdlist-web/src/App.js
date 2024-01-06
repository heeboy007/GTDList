import { Routes, Route, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

import MainView from './pages/MainView';
import TaskView from './pages/TaskView';
import LoginView from './pages/LoginView';
import RegisterView from './pages/RegisterView';
import Helmet from './component/Helmet';

const AppDiv = styled.div`
width: 100vw;
height: 100vh;
`;

function App() {
    const location = useLocation();
    const renderHelmetOn = [
        '/',
        '/listview',
    ];

    return (
        <AppDiv>
            {renderHelmetOn.includes(location.pathname) && <Helmet/>}
            <Routes>
                <Route path='/' Component={MainView}/>
                <Route path='/listview' Component={TaskView}/>
                <Route path='/register' Component={RegisterView}/>
                <Route path='/login' Component={LoginView}/>
            </Routes>
        </AppDiv>
    );
}

export default App;
