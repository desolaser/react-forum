import React from 'react';
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: "10px",
  },
  textField: {
    background: "white",
    borderRadius: "10px",
    padding: "5px 10px",
  },
}));

const FormInput = ({ label, value, onChange, type }) => {
  const classes = useStyles();
  return (
    <FormControl fullWidth className={classes.formControl}>
      <Typography variant="body1" align="left">
        {label}
      </Typography>
      <Input
        type={type ? type : ""}
        className={classes.textField}
        value={value}
        onChange={onChange}
      />
    </FormControl>
  );
};

export default FormInput;