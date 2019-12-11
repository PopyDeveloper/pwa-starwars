import React, { useState, useEffect } from 'react';

import { Container, Title, ListItem } from './styles';

import { getRaces } from '../../services/api';

export default function Step3({ history }) {

  const [races, setRaces] = useState(null);

  useEffect(() => {
    loadRaces()
  }, [])

  async function loadRaces () {
    await getRaces()
      .then(setRaces)
      .catch(err => console.warn(err))
  }

  const showInfo = (race) => {
    localStorage.setItem('nameRace', race['name']);
    history.push('/step4');
  }

  return (
    <Container>
      <Title>Lista de personagens</Title>

      {
        races ? (
          races.map(race =>
          <ListItem key={`${race['name']}${String(Math.random())}`} onClick={() => (showInfo(race))}>{race['name']}</ListItem>)
        ) : (
          <h3>Loading...</h3>
        )
      }
    </Container>
  )
}
