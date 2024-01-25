import Category from "../component/Category";
import { connect } from 'react-redux';

function mapReduxStateToReactProps(state, passedProps) {
    return {
        tasks: state.taskReducer.tasks[passedProps.category],
        hideTable: state.taskReducer.hiddenTables[passedProps.category]
    };
}

export default connect(mapReduxStateToReactProps)(Category);