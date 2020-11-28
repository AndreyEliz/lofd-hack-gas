import {
    GET_CANDIDATES_LIST
} from 'actions/action-types';
import { ICV } from 'store/models/cvModel';
import { CANDIDATES } from '../store/mockData/candidates';

interface IJobListState {
    candidates: ICV[]
}

const initialState: IJobListState = {
    candidates: CANDIDATES // []
}


const candidatesList = (state=initialState, action: any) => {
    const reducers:any = {
        [GET_CANDIDATES_LIST]: () => ({...state, candidates: action.data}),
    }

    return (reducers[action.type]  && reducers[action.type]()) || state
};

export const selectCandidatesList = (state: any) => state.candidatesList.candidates

export default candidatesList;
