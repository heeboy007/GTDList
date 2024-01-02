import Task from "../component/Task";
import { connect } from 'react-redux';

function mapReduxStateToReactProps(state) {
    return {
        columnSettings: state.columnSettings,
        tasks: state.tasks
    };
}

/*
const onChangeCellValue = props.onChangeCellValue;
    const onDeleteTask = props.onDeleteTask;
*/

function mapReduxDispatchToReactProps(dispatch) {
    return {
        onDeleteTask : function(rowID) {
            dispatch({
                type:'DELETE', 
                rowID: rowID
            });
        },
        onChangeCell : function(rowID, colID, changedValue) {
            dispatch({
                type:'UPDATE', 
                rowID: rowID, 
                colID: colID, 
                changedValue: changedValue
            });
        }
    };
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(Task);