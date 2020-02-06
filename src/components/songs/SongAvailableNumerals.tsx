import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import OneBarIcon from '@material-ui/icons/Filter1';
import { useDrag, DragSourceMonitor } from 'react-dnd'
import {NUMERALS} from '../../data/Constants';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}))

interface NumeralProps {
  key:  number
  label: string,
}

const style: React.CSSProperties = {
  opacity: 1,
  margin: 0,
  paddingBottom: 0,
  paddingRight: 5,
  paddingLeft: 5,
  fontFamily: "Times New Roman",
  fontSize: 42,
  marginRight: 15,
  cursor: 'pointer',
  background: "none"
}

const Numeral: React.FC<NumeralProps> = ({ label }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { label, type: 'Numeral' },
    end: (item: { label: string } | undefined, monitor: DragSourceMonitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        alert(`You dropped ${item.label} into ${dropResult.label}!`)
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0.4 : 1
  let icon = <OneBarIcon />;

  return (

    <div ref={drag} style={{ ...style, opacity }} >
      {label}
    </div>
      
  )
}




export default function Numerals() {
  const classes = useStyles();

  const [numeralData, setNumeralData] = React.useState<NumeralProps[]>(NUMERALS);

  return (
    <Container className={classes.root}>
      {numeralData.map(data => {
        return (
          <Numeral key={data.key} label={data.label} />
        );
      })}
    </Container>
  );
}