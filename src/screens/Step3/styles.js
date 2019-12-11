import styled from 'styled-components';
import { colors } from '../../theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

export const Title = styled.h2`
  position: absolute;
  top: 100px;
  letter-spacing: 2px;
`;

export const ListItem = styled.div`
  border: 1px solid;
  width: 200px;
  text-align: center;
  border-radius: 2px;
  padding: 5px 30px;
  cursor: pointer !important;
  margin-bottom: 10px;

  :hover{
    background: ${colors.base};
    color: white;
  }

`;