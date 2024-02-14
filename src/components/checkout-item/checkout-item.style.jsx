import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  img {
    width: 23%;
    height: auto;
    margin-right: 15px;
  }
`;

export const NameOrPrice = styled.span`
  width: 23%;
`;

export const Quantity = styled.span`
  width: 23%;
  display: flex;
  align-items: center;
`;

export const ArrowIcon = styled.div`
  cursor: pointer;
  font-size: 25px;
`;

export const Value = styled.span`
  margin: 0 12px;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
