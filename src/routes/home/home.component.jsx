import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';

const HomePage = () => {
  return (
    <div>
      <Outlet />
      <Directory />
    </div>
  );
};

export default HomePage;
