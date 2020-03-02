import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FourBarIcon from '@material-ui/icons/Filter4';
import TwoBarIcon from '@material-ui/icons/Filter2';
import OneBarIcon from '@material-ui/icons/Filter1';
import { BarAddHandler } from '../../utils/Handlers';

const useStyles = makeStyles(theme => ({
  root: {
    transform: 'translateZ(0px)',
    flexGrow: 1,
  },
  exampleWrapper: {
    position: 'relative',
    marginTop: theme.spacing(-1),
    height: 79,
  },
  radioGroup: {
    margin: theme.spacing(1, 0),
  },
  speedDial: {
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  },
}));

const actions = [
  { icon: <OneBarIcon />, name: '1 Bar', value: 1 },
  { icon: <TwoBarIcon />, name: '2 Bars', value: 2 },
  { icon: <FourBarIcon />, name: '4 Bars', value: 4 },
];

export interface SongDialProps {
  eventHandler : any
}

const SongFormDial : React.FC<SongDialProps> = ({
  eventHandler
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClick = (barNum:number) => {
    console.log(barNum)
    var handler = new BarAddHandler();
    handler.barNum = barNum;
    eventHandler(handler)
  };

  return (
    <div className={classes.root}>
      <div className={classes.exampleWrapper}>
        <SpeedDial
          ariaLabel="SpeedDial example"
          className={classes.speedDial}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction="right"
          color="primary"
        >
          {actions.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={()=>{handleClick(action.value)}}
            />
          ))}
        </SpeedDial>
      </div>
    </div>
  );
}

export default SongFormDial;