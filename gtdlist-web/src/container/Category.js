import Category from "../component/Category";
import { connect } from 'react-redux';

function mapReduxStateToReactProps(state, passedProps) {
    return {
        tasks: state.tasksReducer.tasks[passedProps.category],
        hideTable: state.hiddenTablesReducer.hiddenTables[passedProps.category]
    };
}

export default connect(mapReduxStateToReactProps)(Category);