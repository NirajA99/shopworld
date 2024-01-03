import { combineReducers } from '@reduxjs/toolkit';
import handleCart from './handleCart';


const rootReducers = combineReducers({
    handleCart,
});
export default rootReducers;
