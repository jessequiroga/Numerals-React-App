import React from 'react';
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import {NUMERALS, SCALE} from '../../data/Constants';
import { Numeral, SongConfig } from '../../data/Models';


const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }),
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

interface NumeralProps {
    key:  number,
    label: string,
    value: Numeral
}

interface BarNumeralSelectProps {
    numeral:  Numeral|undefined,
    beatIndex: number,
    barIndex: number,
    numeralHandler: any,
    config : SongConfig
}

const BarNumeralSelect : React.FC<BarNumeralSelectProps> = ({
    numeral: numeral,
    beatIndex: beatIndex,
    barIndex: barIndex,
    numeralHandler: numeralHandler,
    config: config
  }) => {
  
    const classes = useStyles();
  //console.log(numeral);
  const [numeralData, setNumeralData] = React.useState<NumeralProps[]>(NUMERALS);
  const [selectedNumeral, setNumeral] = React.useState((numeral)? numeral.getIndex() : '');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setNumeral(event.target.value as string);
    numeralHandler(NUMERALS[event.target.value as number].value, barIndex, beatIndex)
  };

  const renderNumeral = (numeral: Numeral|undefined, key: number) => {
    var tmpIndex = (numeral) ? numeral.getIndex() : false
    if(!tmpIndex){
        return ('tt')
    } 
    //Adjust for array offset
    tmpIndex = tmpIndex - 1;

    //Check for any transposition. 
    var keyOffset = key - 1;
    var finalOffset = (tmpIndex + keyOffset) % SCALE.length
    return (
        <div>
            {SCALE[finalOffset].label}
        </div>
    )
}

  return (
    <div>
      <FormControl className={classes.margin}>
        <Select
          id="standard-basic"
          value={selectedNumeral}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
            <MenuItem key='no-thing-selected' value="">
                <em>-</em>
            </MenuItem>
            {numeralData.map(
                data => {
                    return (
                        <MenuItem key={data.label} value={data.key}>{data.label} ({renderNumeral(data.value, config.key)})</MenuItem>
                    );
                })
            }  
        </Select>

      </FormControl>
    </div>
  );
}

export default BarNumeralSelect;