import { Provider } from 'react-redux';
import { store } from '../store/store';
import { AppHeader } from './header/header';
import { AppMain } from './main/main';

export const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <AppHeader></AppHeader>
      <AppMain></AppMain>
    </Provider>
  );
};
