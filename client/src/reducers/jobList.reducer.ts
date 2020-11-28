import { IJob } from 'store/models/jobModel';
import {
    GET_JOBS_LIST
} from 'actions/action-types';
import JOBS from 'store/mockData/jobs';
import { ADD_NEW_JOB } from '../actions/action-types';

interface IJobListState {
    jobs: IJob[]
}

const initialState: IJobListState = {
    jobs: JOBS // []
};


const jobList = (state=initialState, action: any) => {
    const reducers:any = {
        [GET_JOBS_LIST]: () => ({...state, jobs: action.data}),
        [ADD_NEW_JOB]: () => ({
            ...state,
            jobs: [...state.jobs, {...action.data, id: state.jobs.length+1, status: 'new'}]}),
    };

    return (reducers[action.type]  && reducers[action.type]()) || state
};

export const selectJobList = (state: any) => state.jobList.jobs;

export default jobList;
