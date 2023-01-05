import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Details from '../components/details';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({
      state: {
        id: 'binance-coin',
        rank: '5',
        symbol: 'BNB',
        name: 'BNB',
        total_supply: '166801148.0000000000000000',
        ath: '732957.00000',
        price_change_24h: '',
        low_24h: '222',
        high_24h: '5555',
        market_cap_rank: '4838',
        circulating_supply: 'asdjds',
        total_volume: '38434343',
  
      },
    }),
  }));

describe('test if the page Details renders components', () => {
    test('test if the page Details is rendered', () => {
      const details = render(
            <Router>
                <Details />
            </Router>,
        );
      expect(details).toMatchSnapshot();
    });
  });