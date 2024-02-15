import { useNavigate } from 'react-router-dom';

import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from './directory-item.style';

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;

  const navigate = useNavigate();
  const onNavigationHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigationHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
