import {
    ADD_NEW_JOB
} from './action-types';
import { Dispatch } from 'redux';
import { IJob } from 'store/models/jobModel';

export const addNewJob = (data: IJob) => (dispatch: Dispatch) => {
    dispatch({type: ADD_NEW_JOB, data});
};
