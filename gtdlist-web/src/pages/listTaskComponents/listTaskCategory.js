import React, { useState, useRef, useEffect } from "react";

import './listTaskCategory.css';

const columnDisplaySettings = {
    id: {
        displayed:false, 
        type: "integer"
    },
    name: {
        displayed: true,
        type: "text"
    },
    date: {
        displayed: true,
        type: "text"
    }
};

function capitalize(str) {
    if(!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function ListTaskCategory(props) {
    const category = props.category;
    const editCell = props.editCell;
    const handleEditCellChange = props.onEditCellChange;
    const [hideTable, setHideTable] = useState(false);

    const [rows, setRows] = useState(props.tasks);

    const inputFocusRefs = useRef({});

    useEffect(() => {
        if(editCell) {
            inputFocusRefs.current[`${editCell.rowId}-${editCell.colId}`]?.focus();
        }
    }, [editCell]);

    const handleChange = (e, id, fieldName) => {
        const newRows = rows.map((row) => {
            if(row.id === id) {
                return { ...row, [fieldName]: e.target.value };
            }
            return row;
        });
        setRows(newRows);
    };

    const handleBlur = () => {
        handleEditCellChange(null, null);
    };

    return (
        <section className={category}>
            <div className="category">
                {category.toUpperCase()}
                {/* task를 더하는 버튼 */}
                <button className="addTask" data-category="action" onClick={(e) => {
                    alert("addTask");
                }}><i className="fa-solid fa-plus"></i></button>
                {/* 해당하는 카테고리의 task를 접는 버튼 */}
                <button className="closeTask" onClick={(e) => {
                    setHideTable(!hideTable);
                }}><i className={"fa-solid fa-caret-down" + (hideTable ? " closed" : "")}></i></button>
            </div>
            { hideTable ? "" : <table>
                {/* Table 위쪽에 Column 명을 뿌리는 역할*/}
                <thead>
                    <tr>
                        {Object.entries(columnDisplaySettings).map(([col, settings]) => {
                            return settings.displayed ? <td>{capitalize(col)}</td> : "";
                        })}
                    </tr>
                </thead>
                {/* 누르면 바로 수정 / 저장이 가능한 테이블을 작성 */}
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.id}>
                            {Object.entries(row).map(([col, cellValue]) => columnDisplaySettings[col].displayed ? (
                                <td onClick={() => handleEditCellChange(row, col)}>
                                    {/* 정확히 수정중인 셀일 경우 아래의 input을 대신 랜더링 */}
                                    {editCell.rowId === row.id && editCell.colId === col ? (
                                        <input 
                                            value={cellValue} 
                                            //이곳의 이벤트들은 빠른 수정모드 / 수정모드 해제를 담당
                                            onChange={(e) => handleChange(e, row.id, col)}
                                            onBlur={handleBlur}
                                            onKeyDown={(e) => {
                                                if(e.key === "Enter")
                                                    handleBlur();
                                            }}
                                            //셀을 직접 에디팅 할때 js dom input 객체에 직접 "foucs"명령을 전달하기 위한 ref
                                            //강제 포커싱이 되면 사용자가 바로 값을 바꾸기고 편하고 handleBlur또한 정상 작동
                                            ref={ref => inputFocusRefs.current[`${row.id}-${col}`] = ref}
                                        />
                                    ) : (
                                        cellValue //수정 중인 셀이 아닐 경우 평범한 텍스트를 렌더링
                                    )}
                                </td>
                            ) : "")}
                        </tr>
                    ))}
                </tbody>
            </table>}
        </section>
    );
}

export default ListTaskCategory;