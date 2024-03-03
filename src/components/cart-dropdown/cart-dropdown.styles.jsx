import styled from 'styled-components';
import {
  BasedButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 280px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  border-radius: 16px;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BasedButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 360px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
