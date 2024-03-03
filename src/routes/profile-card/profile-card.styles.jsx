import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProfileNavLinks = styled.div`
  display: flex;
  align-items: start;
  justify-content: flex-end;
  flex-direction: column;
`;

export const ProfileNavLink = styled(Link)`
  cursor: pointer;
  margin-top: 15px;
  margin-botton: 15px;

  &:first-child {
    margin-top: 5px;
  }

  &:hover {
    color: grey;
  }
`;

export const ProfileDropdownContainer = styled.div`
  position: absolute;
  width: 200px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  top: 90px;
  right: 100px;
  z-index: 5;
`;
