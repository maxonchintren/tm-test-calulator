import React, { useState } from 'react'
import { Grid, Button, StylesProvider } from '@material-ui/core'

import Calculator from 'components/Calculators/Calculator'
import NodCalculator from 'components/Calculators/NodCalculator'
import TriangleCalculator from 'components/Calculators/TriangleCalculator'

import styles from 'components/Calculators/main.module.css'

export default () => {
  const [calcState, setCalcState] = useState(false)
  const [nodState, setNodState] = useState(false)
  const [triangleState, setTriangleState] = useState(false)

  return (
    <StylesProvider injectFirst>
      <Grid container direction="row" justify="center" spacing={4} className={styles['main-container']}>
        <Grid item>
          <Button onClick={() => setCalcState(true)} color="secondary" variant="outlined">Обычный калькулятор</Button>
        </Grid>
        <Grid item>
          <Button onClick={() => setNodState(true)} color="secondary" variant="outlined">Калькулятор НОД</Button>
        </Grid>
        <Grid item>
          <Button onClick={() => setTriangleState(true)} color="secondary" variant="outlined">Высчитать площадь треугольника</Button>
        </Grid>

        <Calculator isShown={calcState} handleClose={setCalcState}/>
        <NodCalculator isShown={nodState} handleClose={setNodState}/>
        <TriangleCalculator isShown={triangleState} handleClose={setTriangleState} />
     </Grid>
    </StylesProvider>
  )
}