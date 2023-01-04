import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoins } from '../redux/coin/coin';
import Display from './display';

const Home = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins);
  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);
  return (
    <div>
      {coins.map((coin) => (
        <div key={coin.id.id}>
          <NavLink state={coin} to="/display">
            <Display
              key={coin.id.id}
              img={coin.id.image}
              id={coin.id.id}
              name={coin.id.name}
              symbol={coin.id.symbol}
              atl={coin.id.atl}
              price={coin.id.current_price}
            />
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Home;
