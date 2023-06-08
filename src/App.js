import './App.scss';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Default from './layouts/Default/Default';
import RegistrationPage from './pages/Registration';
import Main from './pages/Main';
import CartPage from './pages/Cart';
import ProductPage from './pages/Product';
import NotFoundPage from './pages/404';
import Reg from './layouts/Registration/Registration';
import { store } from './Store/Store';

function App() {
  return (
    <Provider store = { store }>
            <Routes>
              
                <Route path={'/'} element={<Default/>}>
                    <Route index element={<Main/>}/>
                    <Route path={'/cart'} element={<CartPage/>}/>
                    <Route path={'/products/:productId'} element={<ProductPage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Route>
                <Route path={'/'} element={<Reg />}>
                    <Route path={'/sign-up'} element={<RegistrationPage/>}/>
                </Route>
            </Routes>
        </Provider>
  );
}

export default App;
