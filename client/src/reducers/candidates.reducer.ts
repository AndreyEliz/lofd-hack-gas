import {
    GET_ALL_CANDIDATES
} from 'actions/action-types';
import { ICV } from 'store/models/cvModel';
import {ADD_NEW_CANDIDATE} from "../actions/action-types";

interface IJobListState {
    candidates: ICV[]
}

const initialState: IJobListState = {
    candidates: []
};


const candidatesList = (state=initialState, action: any) => {
    const reducers:any = {
        [GET_ALL_CANDIDATES]: () => ({...state, candidates: action.data}),
        [ADD_NEW_CANDIDATE]: () => ({
            ...state,
            candidates: [...state.candidates, {...action.data, id: state.candidates.length+1}]
        })
    };

    return (reducers[action.type]  && reducers[action.type]()) || state
};

export const selectCandidatesList = (state: any) => state.candidatesList.candidates;

export default candidatesList;
