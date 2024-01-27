import { Routes, Route } from 'react-router-dom';

import HomePage from './routes/home-page/home-page.component';
import Shop from './routes/shop/shop.component';
import AuthenticationPage from './routes/authentication-page/authentication-page.component';
import Contact from './routes/contact/contact.component';
import NavigationBar from './routes/navigation-bar/navigation-bar.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signin" element={<AuthenticationPage />} />
      </Route>
    </Routes>
  );
};

export default App;
