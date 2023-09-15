import { useContext, useState } from "react"
import { Box, Button, ButtonGroup, TextField } from "@mui/material"
import { ColorModeContext } from "../../context"

export const CounterClients = () => {
  const { mode } = useContext(ColorModeContext);
  const [counter, setCounter] = useState(1);

  const setUsers = value => {
    if (value < 1) return;
    if (value > 60) return;
    setCounter(value);
  };

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      mb: '.5em',
    }}>
      <TextField
        fullWidth
        id="counter-users"
        label="Guest"
        value={counter}
        InputProps={{
          readOnly: true,
        }}
      />
      <ButtonGroup
        variant="contained"
        color={`${mode === 'dark' ? 'secondary' : 'primary'}`}
        orientation="vertical"
      >
        <Button onClick={() => setUsers(counter + 1)}>+</Button>
        <Button onClick={() => setUsers(counter - 1)}>-</Button>
      </ButtonGroup>
    </Box>
  )
}
