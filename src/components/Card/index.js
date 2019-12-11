import React from 'react';
import { Container, Label } from './styles';

export default function Card({ info }) {
  return (
    <Container>
        <Label> Nome: {info['name']}</Label>
        <Label>Classificação: {info['classification']}</Label>
        <Label>Designação: {info['designation']}</Label>
        <Label>Idioma: {info['language']}</Label>
    </Container>
  )
}
