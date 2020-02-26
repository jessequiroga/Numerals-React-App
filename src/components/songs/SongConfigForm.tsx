import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {SCALE, BPM} from '../../data/Constants';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { Popover, Button } from '@material-ui/core';
import { SongConfig } from '../../data/Models';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

interface SongConfigProps {
  songConfig:  SongConfig,
  songConfigHandler: any,
}

const SongConfigForm:  React.FC<SongConfigProps> = ({
  songConfig,
  songConfigHandler
}) => { 
    const classes = useStyles();
    const [songKey, setKey] = React.useState(1);
    const [songBpm, setBpm] = React.useState(2);
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleKeyChange = (event:any) => {
      setKey(event.target.value);
      songConfig.key = event.target.value
      songConfigHandler(songConfig);
    };

    const handleBpmChange = (event:any) => {
      setBpm(event.target.value);
      songConfig.bpm = event.target.value
      songConfigHandler(songConfig);
    };
  
    return (
      <div>
        <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
          Config
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <FormControl variant="outlined" className={classes.formControl}>
            <TextField
                  key="song-config-key"
                  id="song-config-key"
                  select
                  label="Key"
                  value={songKey}
                  onChange={handleKeyChange}
              >
                {SCALE.map((value, i) => { 
                  return (
                    <MenuItem key={value.key} value={value.key}>{value.label}</MenuItem>
                  ) 
                })}
              </TextField>
              
              <TextField
                  id="standard-select-currency"
                  select
                  label="BPM"
                  value={songBpm}
                  onChange={handleBpmChange}
              >
                {BPM.map((value, i) => { 
                  return (
                    <MenuItem key={value.key} value={value.key}>{value.label}</MenuItem>
                  ) 
                })}
              </TextField>
          </FormControl>
        </Popover>
      </div>
    );
}


export default SongConfigForm;