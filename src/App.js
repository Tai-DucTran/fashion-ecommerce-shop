import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  createUserDocFromAuth,
  onAuthStateChangedListener,
} from '../src/utils/firebase/firebase.utils';
import { setCurrentUser } from './store/user/user.action';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import Contact from './routes/contact/contact.component';
import Checkout from './routes/checkout/checkout.component';
import NavigationBar from './routes/navigation-bar/navigation-bar.component';
import Authentication from './routes/authentication/authentication.component';

const App = () => {
  const dipatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async user => {
      if (user) {
        await createUserDocFromAuth(user);
      }
      dipatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
