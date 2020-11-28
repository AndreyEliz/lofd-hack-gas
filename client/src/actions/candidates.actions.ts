import {
    ADD_NEW_CANDIDATE,
} from './action-types';
import { Dispatch } from 'redux';
// import {ICV} from "store/models/cvModel";

export const addNewCandidate = (data: any) => (dispatch: Dispatch) => {
    dispatch({type: ADD_NEW_CANDIDATE, data});
};
