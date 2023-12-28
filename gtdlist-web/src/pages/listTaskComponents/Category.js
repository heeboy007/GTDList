import React, { useState, useRef, useEffect } from "react";

import CategoryBar from "./CategoryBar";
import CategoryTableHeader from "./CategoryTableHeader";

import './Category.css';

const columnDisplaySettings = {
    name: {
        displayed: true,
        type: "text"
    },
    time: {
        displayed: true,
        type: "datetime"
    },
    id: {
        displayed: false, 
        type: "integer"
    },
    order: {
        displayed: false,
        type: "integer"
    },
    memo: {
        displayed: true,
        type: "text"
    },
    difficulty: {
        displayed: true,
        type: "difficulty"
    },
    check: {
        displayed: true,
        type: "check"
    }
};

function Category(props) {
    const category = props.category;
    const editCell = props.editCell;
    const handleEditCellChange = props.onEditCellChange;
    const [hideTable, setHideTable] = useState(false);

    const [tasks, setTasks] = useState(props.tasks);

    const inputFocusRefs = useRef({});

    useEffect(() => {
        if(editCell) {
            inputFocusRefs.current[`${editCell.rowId}-${editCell.colId}`]?.focus();
        }
    }, [editCell]);

    const handleChange = (e, id, fieldName) => {
        const newRows = tasks.map((row) => {
            if(row.id === id) {
                return { ...row, [fieldName]: e.target.value };
            }
            return row;
        });
        setTasks(newRows);
    };

    const handleBlur = () => {
        handleEditCellChange(null, null);
    };

    return (
        <section className={category}>
            <CategoryBar 
                hideTable={hideTable}
                category={category}
                onHideTableChange={(e) => {
                    setHideTable(!hideTable);
                }}/>
            { hideTable ? "" : <table>
                <CategoryTableHeader columnDisplaySettings={columnDisplaySettings}/>
                {/* 누르면 바로 수정 / 저장이 가능한 테이블을 작성 */}
                <tbody>
                    {tasks.map((row) => (
                        <tr key={row.id}>
                            {Object.entries(row).map(([col, cellValue]) => columnDisplaySettings[col].displayed ? (
                                <td onClick={() => handleEditCellChange(row, col)}>
                                    {/* 수정하고자 하는 셀과 일치한다면 수정용 input을 대신 렌더링 */}
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

export default Category;