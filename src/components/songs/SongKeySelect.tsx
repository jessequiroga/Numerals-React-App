import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import {SCALE} from '../../data/Constants';


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const SongKeySelect: React.FC = (props) => { 
  
  const classes = useStyles();
  
  const [songKey, setKey] = React.useState('');

  const handleKeyChange = (event:any) => {
    setKey(event.target.value);
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <TextField
          id="standard-select-currency"
          select
          label="Key"
          value={songKey}
          onChange={handleKeyChange}
      >
        {SCALE.map((value, i) => { 
          return (
            <MenuItem value={value.key}>{value.label}</MenuItem>
          ) 
        })}
      </TextField>
    </FormControl>
  );
}

export default SongKeySelect;