import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const SongTypeSelect: React.FC = (props) => { 
  
  const classes = useStyles();
  
  const [songType, setType] = React.useState('');
  const SONG_TYPES = ["3 Chord", "12 Bar Blues"];

  const handleTypeChange = (event:any) => {
    setType(event.target.value);
  };

  return (
     <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">
        Song Type
      </InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={songType}
        onChange={handleTypeChange}
      >
        {SONG_TYPES.map((type, i) => { 
          return (
            <MenuItem value={i}>{type}</MenuItem>
          ) 
        })}
      </Select>
    </FormControl>
  );
}

export default SongTypeSelect;