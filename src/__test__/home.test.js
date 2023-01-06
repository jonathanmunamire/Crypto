import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Home from '../components/home';
import store from '../redux/configureStore';

describe('HTest Home Component', () => {
  test('Test if the home Component matches the snapshot', () => {
    const home = render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>,
    );
    expect(home).toMatchSnapshot();
  });
});
