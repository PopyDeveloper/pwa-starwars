import React, { useState, useEffect} from 'react';

import { Container, Title } from './styles';

import { getRaceByName } from '../../services/api';

import Card from '../../components/Card';

export default function Step1() {

  const [info, setInfo] = useState(null)

  useEffect(() => {
    loadInfoRace(getNameRace());
  }, [])


  const getNameRace = () => {
    if(localStorage.hasOwnProperty('nameRace')){
      return localStorage.getItem('nameRace');
    }

    return '';
  }

  const getUsername = () => {
    if(localStorage.hasOwnProperty('username')){
      return localStorage.getItem('username');
    }
  }

  async function loadInfoRace (name) {
    await getRaceByName(name)
      .then(setInfo)
      .catch(err => console.warn(err))
  }

  return (
    <Container>
      <Title>Bem vindo {getUsername() || 'padawan'}!!!</Title>

      {
        info ? (
          <Card info={info[0]} />
        ) : (
          <h3>Loading...</h3>
        )
      }

    </Container>
  )
}
