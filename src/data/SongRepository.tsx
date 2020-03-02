import {SONGS, TEST_SONG} from './Fixtures';
import {SongModel} from './Models';

export class SongRepository {
    
    static getSong(songId? : number) : SongModel {
        if (songId) {
            console.log(songId);
            return SONGS[songId]
        }
        console.log(songId);
        return TEST_SONG     
    }
    static getSongs() : SongModel[] {
        return SONGS     
    }
}
