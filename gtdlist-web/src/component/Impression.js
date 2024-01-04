import styled from '@emotion/styled';
import MyButton from "../common/MyButton";

const ImpressionDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CatchPhrase = styled.p`
    font-family: 'SCDream';
    font-weight: bold;
    font-size: 40px;
`;

function Impression() {
    return (
        <ImpressionDiv>
            <CatchPhrase>
                자신만의 흐름을 두드리다.
            </CatchPhrase>
            <MyButton to="/listView">
                시작하기
            </MyButton>
        </ImpressionDiv>
    );
}

export default Impression;