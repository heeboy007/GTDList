/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const DropTableDiv = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 1rem;
    font-weight: bold;
    align-items: center;
    justify-content: space-between;
    cursor: default;
    border-radius: 10px;
    padding: 10px;
`;

/* section colors */
const ColorAction = css`
    background: #f15f5f;
`;

const ColorDefered = css`
    background: #ffef85;
`;

const PlusButton = styled.button`
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    padding: auto;
    background-color: black;
    cursor: pointer;

    i {
        color: white;
    }
`;

const CloseButton = styled.button`
    border: none;
    width: 40px;
    height: 40px;
    padding: auto;
    background-color: transparent;
    cursor: pointer;

    i {
        color: black;
    }

    i.closed {
        rotate: 90deg;
    }
`;

function CategoryBar(props) {
    const mapCategoryToColor = {
        "action": ColorAction,
        "defered": ColorDefered
    };
    
    return (
        <DropTableDiv css={mapCategoryToColor[props.category]}>
            {props.category.toUpperCase()}
            {/* task를 더하는 버튼 */}
            <PlusButton onClick={(e) => { props.onAddTask() }}>
                <i className="fa-solid fa-plus"></i>
            </PlusButton>
            {/* 해당하는 카테고리의 task를 접는 버튼 */}
            <CloseButton onClick={props.onToggleHideTable}>
                <i className={"fa-solid fa-caret-down" + (props.hideTable ? " closed" : "")}></i>
            </CloseButton>
        </DropTableDiv>
    );
}

export default CategoryBar;