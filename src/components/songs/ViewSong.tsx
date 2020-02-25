import React from 'react';

import {SongModel, Numeral, SongConfig} from '../../data/Models';
import {SongFactory} from '../../data/SongFactory';
import {SongRepository} from '../../data/SongRepository';
import SongForm from './SongForm';
import { useParams } from 'react-router';

const ViewSong: React.FC = (props) => { 
  let { id } = useParams();
  
  if (id !== undefined) {
     var tmpSong = SongRepository.getSong(parseInt(id));
  } else {
     var tmpSong = SongFactory.makeSong()
  }
  console.log(tmpSong)
  const [song, setSong] = React.useState<SongModel>(tmpSong)

  return (
    <SongForm song={song} />
  );
}

export default ViewSong;