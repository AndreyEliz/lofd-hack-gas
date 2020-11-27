import {combineReducers} from 'redux';
import authentication from './authentication.reducer';
import jobList from './jobList.reducer';

const rootReducer = combineReducers({
    authentication,
    jobList
});

export default rootReducer;
