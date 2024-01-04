import DropTable from '../component/DropTable';
import { connect } from 'react-redux';

function mapReduxStateToReactProps(state, passedProps) {
    return {
        hideTable: state.hiddenTablesReducer.hiddenTables[passedProps.category]
    };
};

function mapReduxDispatchToReactProps(dispatch, passedProps) {
    return {
        onAddTask: function() {
            dispatch({
                type: 'CREATE_TASK',
                category: passedProps.category
            });
        },
        onToggleHideTable: function(){
            dispatch({
                type: 'TOGGLE_HIDDEN_TABLE',
                category: passedProps.category
            });
        }
    }
};

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(DropTable);