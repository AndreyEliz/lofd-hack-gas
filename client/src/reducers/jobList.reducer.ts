import { IJob } from 'store/models/jobModel';
import {
    GET_JOBS_LIST
} from 'actions/action-types';
import JOBS from 'store/mockData/jobs';

interface IJobListState {
    jobs: IJob[]
}

const initialState: IJobListState = {
    jobs: JOBS // []
}


const jobList = (state=initialState, action: any) => {
    const reducers:any = {
        [GET_JOBS_LIST]: () => ({...state, jobs: action.data}),
    }

    return (reducers[action.type]  && reducers[action.type]()) || state
};

export const selectJobList = (state: any) => state.jobList.jobs

export default jobList;
