import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Step1 from './screens/Step1';
import Step2 from './screens/Step2';
import Step3 from './screens/Step3';
import Step4 from './screens/Step4';

import history from './history';

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={Step1} />
        <Route path='/step2' component={Step2} />
        <Route path='/step3' component={Step3} />
        <Route path='/step4' component={Step4} />
      </Switch>
    </Router>
  )
}