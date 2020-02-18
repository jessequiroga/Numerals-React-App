import React from 'react'
import {SongModel, SongBarModel} from '../../data/Models';
import SongBar from './SongBar';

export interface GridProps {
    song: SongModel
}

/** Styling properties applied to the board element */
const boardStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexWrap: 'wrap',
}
/** Styling properties applied to each square element */
const squareStyle: React.CSSProperties = { width: '12.5%', height: '12.5%' }

/**
 * The chessboard component
 * @param props The react props
 */
const SongGrid: React.FC<GridProps> = ({
    song: songModel
}) => {
    
    function renderBar(songBar: SongBarModel) {
        return <SongBar bar={songBar}/>
    }

    const rows = []
    for (let i = 0; i < songModel.bars.length; i += 1) {
       rows.push(renderBar(songModel.bars[i]))
    }
    return <div style={boardStyle}>{rows}</div>
  
}
export default SongGrid;
