import styled from '@emotion/styled';

const ErrorDiv = styled.div`
    background-color: #eee;
    border-radius: 10vw 10vw 10vw 10vw;
    border: 5px dashed #ddd;
    font-weight: bold;
    text-align: center;
    padding: 1.5vw 0 2vw 0;

    p:nth-of-type(1) {
        font-size: 30px;
    }
`;

function MyError(props) {
    const code = props.code || "1000";
    const desc = props.desc || "알 수 없는 에러입니다. 관리자에게 문의해주세요.";
    return(
        <ErrorDiv>
            <p>FlowForge에 문제가 생겼습니다!</p>
            <p>error Code : {code}</p>
            <p>{desc}</p>
        </ErrorDiv>
    );
}

export default MyError;