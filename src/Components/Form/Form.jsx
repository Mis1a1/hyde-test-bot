import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

import './Form.css';
import { useNavigate } from 'react-router-dom';



function Checkout() {

  const navigate = useNavigate();

  function onBack() {
    navigate("//localhost:3000/");
  }




  return (
   <Box p={{p: 30}} sx={{ m: +5 }}>
      <Button variant="contained" onClick={() => {
        onBack()
      }}>Назад</Button>
      <br/>
      <br/>
      <Typography variant="h4" component="h1">
      Ваш заказ
      </Typography>
      <br></br>
   <FormControl fullWidth>
     <InputLabel variant="standard" htmlFor="uncontrolled-native">
       Способ оплаты 
     </InputLabel>
     <NativeSelect
       defaultValue={30}
       inputProps={{
         name: 'age',
         id: 'uncontrolled-native',
       }}
     >
       <option >Наличными</option>
       <option >криптовалюта</option>
       <option >Банковский перевод</option>
     </NativeSelect>
     <br/>

     <TextField id="standard-basic" label="Ваше имя" variant="standard" />

     <TextField id="standard-basic" label="Комментарий к заказу" variant="standard" />
     <br/>
     <br/>

     <Button variant="contained">Заказать</Button>
     <br/>
   </FormControl>
 </Box>
  )

      };

export default Checkout;