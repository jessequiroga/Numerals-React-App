import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {NUMERALS, SCALE} from '../../data/Constants';
import { Numeral, SongConfig } from '../../data/Models';
import { NumeralHandler } from '../../utils/Handlers';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';


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
    numeral,
    beatIndex,
    barIndex,
    numeralHandler,
    config
  }) => {
  
  const classes = useStyles();
  //console.log(numeral);
  const numeralData = NUMERALS;
  const [selectedNumeral, setNumeral] = React.useState((numeral)? numeral.getIndex() : '');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setNumeral(event.target.value as string);

    var handler = new NumeralHandler();
    handler.barIndex = barIndex;
    handler.beatIndex = beatIndex;
    handler.numeral = NUMERALS[event.target.value as number].value;
    numeralHandler(handler)
  };

  const renderNumeral = (numeral: Numeral|undefined, key: number) => {
    var tmpIndex = (numeral) ? numeral.getIndex() : false
    if(!tmpIndex){
        return ('')
    } 
    //Adjust for array offset
    tmpIndex = tmpIndex - 1;

    //Check for any transposition. 
    var keyOffset = key - 1;
    var finalOffset = ((tmpIndex + keyOffset)) % SCALE.length
    return (
        <div>
            {SCALE[finalOffset].label}
        </div>
    )
}

  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel id="demo-simple-select-helper-label">{renderNumeral(numeral, config.key)}</InputLabel>
        <Select
          value={selectedNumeral}
          onChange={handleChange}
        >   
            <MenuItem key='no-thing-selected' value="">
                <em>-</em>
            </MenuItem>
            {numeralData.map(
                data => {
                    return (
                        <MenuItem key={data.label} value={data.key}>{data.label}</MenuItem>
                    );
                })
            }  
        </Select>
      </FormControl>
    </div>
  );
}

export default BarNumeralSelect;