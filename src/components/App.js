import React from 'react'
import { Container, Typography } from '@material-ui/core'

import Calculators from 'components/Calculators'

function App() {
  return (
    <Container className="App">
      <Typography variant="h2" gutterBottom align="center">
        Агрегатор калькуляторов
      </Typography>
      <Calculators />
    </Container>
  );
}

export default App
