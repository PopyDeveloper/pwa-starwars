import React, { useState } from 'react';

import { Container, ButtonsContainer, SelectButtonSith, SelectButtonJedi, Button } from './styles';

export default function Step2(props) {

  const [race, setRace] = useState(null)

  const goToNextStep = () => {
    props.history.push('/step3');
  }

  const selectRace = _race => {
    setRace(_race);
    localStorage.setItem('race', _race)
  }

  return (
    <Container>
      <ButtonsContainer>
        <SelectButtonJedi race={race} onClick={() => selectRace('Jedi')}>Jedi</SelectButtonJedi>
        <SelectButtonSith race={race} onClick={() => selectRace('Sith')}>Sith</SelectButtonSith>
      </ButtonsContainer>

      <Button onClick={goToNextStep} race={race}>Go to next step</Button>
    </Container>
  )
}
