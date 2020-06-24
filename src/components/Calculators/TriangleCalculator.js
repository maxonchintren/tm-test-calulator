import React, { useState } from 'react'
import { Dialog, DialogActions, DialogTitle, DialogContent, Button, TextField, Typography } from '@material-ui/core'

export default function Calculator ({ isShown, handleClose }) {
  let [firstSide, setFirstSide] = useState('')
  let [secondSide, setSecondSide] = useState('')
  let [thirdSide, setThirdSide] = useState('')
  let [result, setResult] = useState('')

  const calculateArea = (side1, side2, side3) => {
    const halfPerimeter = (+side1 + +side2 + +side3) / 2
    const area = Math.sqrt(halfPerimeter * (halfPerimeter - side1) * (halfPerimeter - side2) * (halfPerimeter - side3))
    setResult(area ? "Результат: " + area : "Неверные входные данные")
  }

  if (!isShown) {
    return null
  } else {
    return (
      <Dialog
        open={isShown}
        onClose={() => handleClose(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Рассчитать площадь треугольника</DialogTitle>
        <DialogContent>
          <TextField
            variant="outlined"
            label="Введите первую сторону треугольника"
            value={firstSide}
            onChange={(e) => setFirstSide(e.target.value)}
            autoFocus
            fullWidth
            margin="dense"
          />
          <TextField
            variant="outlined"
            label="Введите вторую сторону треугольника"
            value={secondSide}
            onChange={(e) => setSecondSide(e.target.value)}
            fullWidth
            margin="dense"
          />
          <TextField
            variant="outlined"
            label="Введите третью сторону треугольника"
            value={thirdSide}
            onChange={(e) => setThirdSide(e.target.value)}
            fullWidth
            margin="dense"
          />
          <Typography variant="subtitle1" align="center">
            {result}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)} color="primary">
            Закрыть
          </Button>
          <Button
            onClick={() => calculateArea(firstSide, secondSide, thirdSide)}
            color="primary" autoFocus
            disabled={!firstSide || !secondSide || !thirdSide}
          >
            Рассчитать
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}