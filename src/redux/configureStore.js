import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import Coins from './currency/currency';

const allReducers = combineReducers({
  coins: Coins,
});

const store = configureStore({ reducer: allReducers }, applyMiddleware(thunk));

export default store;
