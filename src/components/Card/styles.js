import styled from 'styled-components';
import { colors } from '../../theme';

export const Container = styled.div`
  background-color: ${colors.base};
  border-radius: 10px;
  padding: 10px;
  width: 70vw;
  height: 50vh;
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
`;

export const Label = styled.p`
  color: white;
  font-size: 1.4em;
  margin-bottom: 11px;
  letter-spacing: 2px;
  text-align: center;
  text-transform: capitalize;
`;