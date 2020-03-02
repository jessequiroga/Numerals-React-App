import React from 'react';

import { SongModel } from '../../data/Models';
import { SongRepository } from '../../data/SongRepository';
import SongForm from './SongForm';
import { useParams } from 'react-router';
import { TEST_SONG } from '../../data/Fixtures';

const ViewSong: React.FC = (props) => {
  let { id } = useParams();
  var tmpSong = TEST_SONG
  const [song, setSong] = React.useState<SongModel>(tmpSong)

  if (id !== undefined && song !== tmpSong) {
    setSong(SongRepository.getSong(parseInt(id)))
  }

  return (
    <SongForm song={song} />
  );
}

export default ViewSong;