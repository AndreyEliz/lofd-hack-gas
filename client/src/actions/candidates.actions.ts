import {
    ADD_NEW_CANDIDATE,
    GET_ALL_CANDIDATES
} from './action-types';
import { Dispatch } from 'redux';
import { ICV } from 'store/models/cvModel';
import { get, postJSON } from 'sfapi';
// import {ICV} from "store/models/cvModel";

export const addNewCandidate = (data: ICV) => (dispatch: Dispatch) => {
    postJSON('http://hakhak.ddns.net:8081/api/candidates/UploadCandidate', data).then(() => {
        dispatch({type: ADD_NEW_CANDIDATE, data});
    })
    .catch((e) => {console.log(e)})
};

export const getAllCandidatesList = () => (dispatch: Dispatch) => {
    get('http://hakhak.ddns.net:8081/api/candidates/all').then((data) => {
        dispatch({type: GET_ALL_CANDIDATES, data});
    })
    .catch((e) => {console.log(e)})
};
