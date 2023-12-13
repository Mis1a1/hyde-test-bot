import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { motion } from "framer-motion";

import "./Form.css";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  function onBack() {
    navigate("/checkout");
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Box p={{ p: 30 }} sx={{ m: +2 }}>
        <Button
          sx={{
            borderRadius: 3,
            backgroundColor: "black",
          }}
          variant="contained"
          onClick={() => {
            onBack();
          }}
        >
          Назад
        </Button>
        <Box sx={{ m: +4 }}>
        <br />
        <br />
        <Typography variant="h4" component="h1">
          Оплата
        </Typography>
        <br></br>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Способ оплаты
          </InputLabel>
          <NativeSelect
            defaultValue={30}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
          >
            <option>Наличными</option>
            <option>криптовалюта</option>
            <option>Банковский перевод</option>
          </NativeSelect>
          <br />

          <TextField id="standard-basic" label="Ваше имя" variant="standard" />

          <TextField
            id="standard-basic"
            label="Комментарий к заказу"
            variant="standard"
          />
          <br />
          <br />

          <Button
            sx={{
              borderRadius: 3,
              backgroundColor: "black",
            }}
            variant="contained"
          >
            Заказать
          </Button>
          <br />
        </FormControl>
        </Box>
      </Box>
    </motion.div>
  );
}

export default Form;
