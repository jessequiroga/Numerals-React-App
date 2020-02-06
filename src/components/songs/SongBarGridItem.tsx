import React from 'react'
import { useDrop } from 'react-dnd'
import Grid from '@material-ui/core/Grid';

export interface GridItemProps {
    children: any,
    id:any;
    key: any;
}

const style: React.CSSProperties = {
    border : "dotted thin lightgray"
}

const SongBarGridItem: React.FC <GridItemProps> = ({ children, id, key }) =>  {
  const [{ canDrop, isOver, droppedItem }, drop] = useDrop({
    accept: "Numeral",
    drop: () => ({ label: 'Dustbin' }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      droppedItem : monitor.getItem()
    }),
  })

  const isActive = canDrop && isOver
  let backgroundColor = ''
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = ''
  }

  return (
    <Grid ref={drop} style={{...style, backgroundColor }} container item xs={3} spacing={0}>
         {isActive ? 'Release to drop' : 'Drag a box here'}
         {droppedItem ? droppedItem.label : ''}
    </Grid>
  )
}

export default SongBarGridItem
