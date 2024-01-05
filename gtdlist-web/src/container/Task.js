import Task from "../component/Task";
import { connect } from 'react-redux';

function mapReduxStateToReactProps(state) {
    return {
        columnSettings: state.columnSettingsReducer.columnSettings,
        tasks: state.tasksReducer.tasks
    };
}

function mapReduxDispatchToReactProps(dispatch, passedProps) {
    return {
        onDeleteTask: function(rowID) {
            dispatch({
                type:'DELETE_TASK',
                rowID: rowID,
                category: passedProps.category
            });
        },
        onChangeCell: function(rowID, colID, changedValue) {
            dispatch({
                type:'UPDATE_TASK', 
                rowID: rowID, 
                colID: colID, 
                changedValue: changedValue
            });
        }
    };
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(Task);