import { useEffect } from 'react';
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
        <Display
          key={coin.id.id}
          img={coin.id.image}
          id={coin.id.id}
          name={coin.id.name}
          symbol={coin.id.symbol}
          price={coin.id.current_price}
        />
      ))}
    </div>
  );
};

export default Home;
