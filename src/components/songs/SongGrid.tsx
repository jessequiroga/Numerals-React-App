import React from 'react'
import {SongModel, SongBarModel} from '../../data/Models';
import SongBar from './SongBar';

export interface GridProps {
    song: SongModel,
    numeralChangeHandler: any
}

/** Styling properties applied to the board element */
const boardStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexWrap: 'wrap',
}

/**
 * The chessboard component
 * @param props The react props
 */
const SongGrid: React.FC<GridProps> = ({
    song: songModel,
    numeralChangeHandler : numeralHandler
}) => {

    const [songState, setSong] = React.useState<SongModel>(songModel)
    React.useEffect(() => { setSong(songModel) }, [songModel]);    
    function renderBar(songBar: SongBarModel, barIndex: number) {
        return <SongBar key={"song-bar-" + barIndex} config={songModel.config} bar={songBar} barIndex={barIndex} numeralHandler={numeralHandler}/>
    }

    const rows = []
    for (let i = 0; i < songState.bars.length; i += 1) {
       rows.push(renderBar(songState.bars[i], i))
    }
    return <div style={boardStyle}>{rows}</div>
  
}
export default SongGrid;
