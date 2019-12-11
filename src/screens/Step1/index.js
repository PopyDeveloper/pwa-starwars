import React, { useState, useEffect } from 'react';

import { Container, TextField, SelectButton, ButtonsContainer, Button, CheckboxContainerMan, CheckboxContainerWoman } from './styles';

export default function Step1(props) {

  const [name, setName] = useState(null)
  const [gener, setGener] = useState(null)

  useEffect(() => {
    if(!name) localStorage.clear();
  }, [name])

  const goToNextStep = () => {
    props.history.push('/step2');
  }

  const saveName = value => {
    setName(value)
    localStorage.setItem('username', name)
  }

  const selectGener = _gener => {
    setGener(_gener)
    localStorage.setItem('gener', _gener)
  }

  return (
    <Container>
      <TextField
        type="text"
        placeholder="Digite seu nome ..."
        onChange={e => saveName(e.target.value)}
      />

    <ButtonsContainer>
      <CheckboxContainerMan gener={gener}> Homem
        <SelectButton type="checkbox" value="man" onClick={() => selectGener('man')}></SelectButton>
      </CheckboxContainerMan>
      <CheckboxContainerWoman gener={gener}> Mulher
        <SelectButton type="checkbox" value="woman" onClick={() => selectGener('woman')}></SelectButton>
      </CheckboxContainerWoman>

    </ButtonsContainer>
      <Button name={name} gener={gener} onClick={goToNextStep}>Next</Button>

    </Container>
  )
}
