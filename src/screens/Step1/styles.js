import styled from 'styled-components';
import { colors } from '../../theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

export const TextField = styled.input`
  height: 3em;
  width: 90%;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 5px;
  font-size: 2em;
  text-align: center;
  color: ${colors.base};
  ::placeholder {
    color: ${colors.base}
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px;
`;

export const CheckboxContainerMan = styled.label`
    background-color: ${props => props.gener === 'man' ? '#3498db' : colors.base};
    border-radius: 5px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: fantasy;
    font-size: 2em;
    cursor: pointer;
    width: 40%;
    height: 100%;
    margin: 20px 0;
    padding: 6px 20px;
`;

export const CheckboxContainerWoman = styled.label`
    background-color: ${props => props.gener === 'woman' ? 'red' : colors.base};
    border-radius: 5px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: fantasy;
    font-size: 2em;
    cursor: pointer;
    width: 40%;
    height: 100%;
    margin: 20px 0;
    padding: 6px 20px;
`;

export const SelectButton = styled.input`
  display: none;
`;

export const Button = styled.button`
  display: ${props => props.name && props.gener ? 'block' : 'none'};
  width: 150px;
  height: 70px;
  border: 2px solid #F6AD10;
  border-radius: 10px;
  background: #F6AD10;
  font-size: 3em;
  font-family: fantasy;
  letter-spacing: 4px;
  color: white;
  position: absolute;
  bottom: 100px;
`;
