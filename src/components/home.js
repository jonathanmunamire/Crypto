import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { fetchCoins } from '../redux/currency/currency';
import Display from './display';
import './home.css';

const Home = () => {
  const dispatch = useDispatch();

  const { coins, status } = useSelector((state) => state.coins);
  const [search, setSearch] = useState('');
  useEffect(() => {
    if (status === null) {
      dispatch(fetchCoins());
    }
  }, [status, dispatch]);

  return (
    <div>
      <div className="imgDv">
        <img className="main_image" src="https://images.pexels.com/photos/8919542/pexels-photo-8919542.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
      <div className="main_home">

        <div className="searchDiv">
          <input
            className="searchBar"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Here"
          />
          <FaSearch className="searchIcon" />
        </div>
        <div className="grid">
          {coins.filter((searchCoin) => searchCoin.name.toLowerCase()
            .includes(search.toLowerCase())
              || searchCoin.symbol.toLowerCase().includes(search.toLowerCase()))
            .map((coins) => (
            // {`/${coins.id}`}
              <div className="item" key={coins.id}>
                <Link className="coinLink" state={coins} to={`/${coins.id}`}>
                  <Display
                    key={coins.id}
                    img={coins.image}
                    id={coins.id.toUpperCase()}
                    name={coins.name}
                    symbol={coins.symbol.toUpperCase()}
                    atl={coins.atl}
                    price={coins.current_price}
                  />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
