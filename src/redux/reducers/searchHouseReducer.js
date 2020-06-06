import { GATHER_SEARCH_HOUSE_INFO } from '../actions/types';

const initialState = {}

const SearchHouseReducer = (state = initialState, action) => {

    switch(action.type){

        case GATHER_SEARCH_HOUSE_INFO:
            
            return{
                ...state,
                ...action.payload
            }
        
        default:
            return state;
    }
}

export default SearchHouseReducer;