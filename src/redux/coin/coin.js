import { createAsyncThunk } from '@reduxjs/toolkit';

// ACTIONS
const GET_COINS = 'bookstore/src/redux/GET_COINS';

// DEFAULT BOOKS

const displayCoins = [];
// REDUCERS
const bookReducer = (state = displayCoins, action) => {
  switch (action.type) {
    case GET_COINS:
      return action.unique;
    default:
      return state;
  }
};

// ACTIONS CREATORS

const fetchCoins = createAsyncThunk(GET_COINS, async (pos, { dispatch }) => {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false');
  const data = await response.json();
  const coins = data.map((key) => ({
    id: key,
  }));
  dispatch({
    type: GET_COINS,
    unique: coins,
  });
});

export default bookReducer;
export { fetchCoins };
