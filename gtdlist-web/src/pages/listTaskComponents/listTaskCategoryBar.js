import React from "react";

import './listTaskCategoryBar.css';

function ListTaskCategoryBar(props) {
    const category = props.category;
    const hideTable = props.hideTable;

    return (
        <div className="category">
            {category.toUpperCase()}
            {/* task를 더하는 버튼 */}
            <button className="addTask" data-category="action" onClick={(e) => {
                alert("addTask");
            }}><i className="fa-solid fa-plus"></i></button>
            {/* 해당하는 카테고리의 task를 접는 버튼 */}
            <button className="closeTask" onClick={props.onHideTableChange}><i className={"fa-solid fa-caret-down" + (hideTable ? " closed" : "")}></i></button>
        </div>
    );
}

export default ListTaskCategoryBar;