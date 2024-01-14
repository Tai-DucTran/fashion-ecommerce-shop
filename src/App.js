import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import NavigationBar from "./routes/navigation-bar/navigation-bar.component";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};
const Contact = () => {
  return <h1>I am the shop page</h1>;
};
const SignIn = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Shop />} />
        <Route path="signin" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
