import React from 'react';

import {SongConfig} from '../../data/Models';
import {SongFactory} from '../../data/SongFactory';
import SongForm from './SongForm';
import { useParams } from 'react-router';

const CreateSong: React.FC = (props) => { 
  let { template } = useParams();

  var songConfig : SongConfig = {
    bpm : 4,
    key: 1
  }

  var songFactory = new SongFactory(songConfig)
  var song = songFactory.makeSong( template )

  return (
    <SongForm song={song} />
  );
}

export default CreateSong;