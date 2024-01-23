import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import SignUpForm from './routes/sign-in/sign-in.component';
import Contact from './routes/contact/contact.component';
import NavigationBar from './routes/navigation-bar/navigation-bar.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signin" element={<SignUpForm />} />
      </Route>
    </Routes>
  );
};

export default App;
