import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import Navbar from '../components/navbar';

describe('Test NavBar Component', () => {
  test('Check if Navbar matches the Snapshot', () => {
    const home = render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>,
    );
    expect(home).toMatchSnapshot();
  });
});