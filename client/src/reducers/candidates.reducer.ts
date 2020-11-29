import {
    GET_CANDIDATES_LIST
} from 'actions/action-types';
import { ICV } from 'store/models/cvModel';
import { CANDIDATES } from '../store/mockData/candidates';
import {ADD_NEW_CANDIDATE} from "../actions/action-types";

interface ICandidateListState {
    candidates: ICV[]
}

const initialState: ICandidateListState = {
    candidates: CANDIDATES // []
};


const candidatesList = (state=initialState, action: any) => {
    const reducers:any = {
        [GET_CANDIDATES_LIST]: () => ({...state, candidates: action.data}),
        [ADD_NEW_CANDIDATE]: () => ({
            ...state,
            candidates: [...state.candidates, {...action.data, id: state.candidates.length+1, status: 'new'}]}),
    };

    return (reducers[action.type]  && reducers[action.type]()) || state
};

export const selectCandidatesList = (state: any) => state.candidatesList.candidates;

export default candidatesList;
