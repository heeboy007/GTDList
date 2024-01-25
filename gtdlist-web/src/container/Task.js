import Task from "../component/Task";
import { connect } from 'react-redux';
import { DELETE_TASK, UPDATE_EDIT_CELL, UPDATE_TASK } from "../store/actions/taskActions";

function mapReduxStateToReactProps(state) {
    return {
        columnSettings: state.taskReducer.columnSettings,
        tasks: state.taskReducer.tasks,
        editingCell: state.taskReducer.editingCell
    };
}

function mapReduxDispatchToReactProps(dispatch, passedProps) {
    return {
        onDeleteTask: function(rowID) {
            dispatch({
                type: DELETE_TASK,
                rowID: rowID,
                category: passedProps.category
            });
        },
        onChangeCell: function(rowID, colID, changedValue) {
            dispatch({
                type: UPDATE_TASK, 
                rowID: rowID, 
                colID: colID, 
                changedValue: changedValue
            });
        },
        onChangeEditCell: function(rowID, colID){
            dispatch({
                type: UPDATE_EDIT_CELL,
                rowID: rowID,
                colID: colID
            });
        }
    };
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(Task);