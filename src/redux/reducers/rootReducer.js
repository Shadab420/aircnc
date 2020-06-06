import { combineReducers } from 'redux'
import searchHouseReducer from './searchHouseReducer';
import bookingReducer from './bookingReducer'

export default combineReducers({
    
    searchHouse: searchHouseReducer,
    booking: bookingReducer
})