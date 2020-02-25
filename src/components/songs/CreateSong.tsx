import React from 'react';

import {SongModel, Numeral, SongConfig} from '../../data/Models';
import {SongFactory} from '../../data/SongFactory';
import {SongRepository} from '../../data/SongRepository';
import SongForm from './SongForm';
import { useParams } from 'react-router';

const CreateSong: React.FC = (props) => { 
  let { template } = useParams();
  
  var tmpSong = SongFactory.makeSong()

  console.log(tmpSong)
  const [song, setSong] = React.useState<SongModel>(tmpSong)

  return (
    <SongForm song={song} />
  );
}

export default CreateSong;