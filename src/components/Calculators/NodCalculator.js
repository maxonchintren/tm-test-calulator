import React, {useState} from 'react'
import { Dialog, DialogActions, DialogTitle, DialogContent, TextField, Button, StylesProvider, Typography } from '@material-ui/core'

import styles from 'components/Calculators/main.module.css'

export default function Calculator ({ isShown, handleClose }) {
  let [firstNum, setFirstNum] = useState('')
  let [secondNum, setSecondNum] = useState('')
  let [result, setResult] = useState('')

  const calculateNod = (num1, num2) => {
    if (num2 === 0) {
      setResult("Результат: " + num1)
      return
    }
    return calculateNod(num2, num1 % num2)
  }

  if (!isShown) {
    return null
  } else {
    return (
      <StylesProvider>
        <Dialog
          open={isShown}
          onClose={() => handleClose(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle id="alert-dialog-title">Калькулятор НОД</DialogTitle>
          <DialogContent>
            <TextField
              label="Введите первое число"
              autoFocus
              value={firstNum}
              onChange={(e) => setFirstNum(e.target.value)}
              className={styles.textfield}  
            />
            <TextField
              label="Введите второе число"
              value={secondNum}
              onChange={(e) => setSecondNum(e.target.value)}
              className={styles.textfield}
            />
            <Typography variant="subtitle1" align="center">
              {result}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleClose(false)} color="secondary">
              Закрыть
            </Button>
            <Button
              color="primary"
              onClick={() => calculateNod(firstNum, secondNum)}
              disabled={!firstNum || !secondNum || +secondNum === 0 || +firstNum === 0}
              >
              Рассчитать
            </Button>
          </DialogActions>
        </Dialog>
      </StylesProvider>
    )
  }
}