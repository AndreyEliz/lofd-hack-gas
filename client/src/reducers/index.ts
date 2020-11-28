import {combineReducers} from 'redux';
import authentication from './authentication.reducer';
import jobList from './jobList.reducer';
import candidatesList from './candidates.reducer';

const rootReducer = combineReducers({
    authentication,
    jobList,
    candidatesList
});

export default rootReducer;
