import DropTable from '../component/DropTable';
import { connect } from 'react-redux';
import { CREATE_TASK, TOGGLE_HIDDEN_TABLE } from '../store/actions/taskActions';

function mapReduxStateToReactProps(state, passedProps) {
    return {
        hideTable: state.taskReducer.hiddenTables[passedProps.category]
    };
};

function mapReduxDispatchToReactProps(dispatch, passedProps) {
    return {
        onAddTask: function() {
            dispatch({
                type: CREATE_TASK,
                category: passedProps.category
            });
        },
        onToggleHideTable: function(){
            dispatch({
                type: TOGGLE_HIDDEN_TABLE,
                category: passedProps.category
            });
        }
    }
};

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(DropTable);