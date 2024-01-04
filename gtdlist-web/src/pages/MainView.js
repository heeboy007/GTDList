import styled from '@emotion/styled';

import Impression from "../component/Impression";

const MainDiv = styled.div`
    width: 960px;
    height: 100%;
    max-width: 960px;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0 auto;
    box-sizing: content-box;
    background: white;
    overflow-y: auto;
`;

function MainView() {
    return (
        <MainDiv>
            <Impression />
        </MainDiv>
    );
}

export default MainView;