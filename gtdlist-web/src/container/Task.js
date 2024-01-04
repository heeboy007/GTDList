import Task from "../component/Task";
import { connect } from 'react-redux';

function mapReduxStateToReactProps(state) {
    return {
        columnSettings: state.columnSettingsReducer.columnSettings,
        tasks: state.tasksReducer.tasks
    };
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        onDeleteTask: function(rowID) {
            dispatch({
                type:'DELETE', 
                rowID: rowID
            });
        },
        onChangeCell: function(rowID, colID, changedValue) {
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