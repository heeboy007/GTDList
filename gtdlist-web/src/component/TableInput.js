/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef } from "react";
import { format } from "date-fns";
import { css } from "@emotion/react";

import DateTimePicker from 'react-datetime-picker';

import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';

function TableInput(props) {
    const row = props.row;
    const col = props.col;
    const cellValue = props.cellValue;

    //default value if nothings happened.
    let builtInput = <span className="error">{cellValue}</span>;

    let inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [row, col]);

    //셀을 직접 에디팅 할때 js dom input 객체에 직접 "foucs"명령을 전달하기 위해 존재함.
    //강제 포커싱이 되면 사용자가 바로 값을 바꾸기고 편하고 handleBlur또한 정상 작동
    if(props.type === "text") {
        builtInput = (
            <input 
                value={cellValue} 
                onChange={(e) => props.onChangeCellValue(e.target.value, row, col)}
                onBlur={props.onUnFocusCell}
                onKeyDown={(e) => {
                    if(e.key === "Enter")
                        props.onUnFocusCell();
                }}
                ref={(ref) => {
                    inputRef.current = ref;
                }}
            />
        );
    } else if (props.type === "datetime") {
        let dateString = cellValue.replace(' ', 'T');
        builtInput = (
            <DateTimePicker
                css={css`
                    width: 100%;
                    div {
                        border: none;
                    }
                `}
                value={new Date(dateString)} 
                disableClock={true}
                onChange={(date) => {
                    const formattedDate = format(date, 'yyyy-MM-dd HH:mm');
                    props.onChangeCellValue(formattedDate, row, col);
                }}
                onKeyDown={(e) => {
                    console.log(e.key);
                    if(e.key === "Enter")
                        props.onUnFocusCell();
                }}
                onBlur={props.onUnFocusCell}
            />
        );
    } else if (props.type === "check") {
        builtInput = (
            <i
                css={css`
                    width: 100%;
                    height: 100%;
                `}
                className={cellValue ? "myCheck fa-solid fa-check" : "myCheck fa-solid fa-xmark"}
                onClick={(e) => {
                    props.onChangeCellValue(!cellValue, row, col)
                }}
            />
        );
    } else if (props.type === "difficulty") {
        builtInput = (
            <select
            value={cellValue}
            onChange={(e) => props.onChangeCellValue(e.target.value, row, col)}
            onBlur={props.onUnFocusCell}
            ref={(ref) => {
                inputRef.current = ref;
            }}>
                <option value="easy">{"easy"}</option>
                <option value="normal">{"normal"}</option>
                <option value="hard">{"hard"}</option>
            </select>
        );
    }

    return builtInput;
}

export default TableInput;