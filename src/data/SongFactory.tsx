import {SongConfig, SongBarModel, BeatModel, SongModel} from './Models';
import { TEST_SONG } from './Fixtures';

export class SongFactory {
    public config: SongConfig
    constructor(config : SongConfig) {
        this.config = config
    }
    makeBar() : SongBarModel {
        const TMP_BAR : SongBarModel = {
            lyrics : '',
            beats : []
        }
        for(var i=0;i<this.config.bpm;i++){
            const TMP_BEAT : BeatModel = {
                numeral : undefined
            }
            TMP_BAR.beats.push(TMP_BEAT)
        }
        return TMP_BAR     
    }
    static makeSong() : SongModel {
        
        const CONFIG : SongConfig = {
            bpm : 4,
            key: 1
        }
        
        const SONG: SongModel = {
            title: 'Give me a title',
            bars : [
                
            ],
            config : CONFIG
        };

        return SONG;     
    }
}
