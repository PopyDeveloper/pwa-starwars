import styled from 'styled-components';

import { colors } from '../../theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px;
  height: 70vh;
`;

export const SelectButtonJedi = styled.button`
  background-color: ${props => props.race === 'Jedi' ? 'blue' : colors.base};
  width: 45%;
  height: 100%;
  border: 2px solid ${props => props.race === 'Jedi' ? 'blue' : colors.base};
  border-radius: 10px;
  font-size: 3em;
  font-family: fantasy;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: white;
`;

export const SelectButtonSith = styled.button`
  background-color: ${props => props.race === 'Sith' ? 'red' : colors.base};
  width: 45%;
  height: 100%;
  border: 2px solid ${props => props.race === 'Sith' ? 'red' : colors.base};
  border-radius: 10px;
  font-size: 3em;
  font-family: fantasy;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: white;
`;

export const Button = styled.button`
  display: ${props => props.race ? 'block' : 'none'};
  width: 150px;
  height: 70px;
  border: 2px solid ${colors.base};
  border-radius: 10px;
  background: ${colors.base};
  font-size: 3em;
  font-family: fantasy;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: white;
  position: absolute;
  bottom: 18px;
  width: 90%;
`;