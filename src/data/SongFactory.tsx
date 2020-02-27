import {SongConfig, SongBarModel, BeatModel, SongModel, I, II, III, IV, V, Numeral} from './Models';
import { SONG_TYPES } from './Constants';

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
    makeSong(type? : string) : SongModel {
        
        var song: SongModel = {
            title: 'Give me a title',
            bars : [
                
            ],
            config : this.config
        };

        if (type) {
            var foundType = SONG_TYPES.find( (songType) => {
                return songType.label === type
            })
            if(foundType) {
                song.bars = foundType.getBars(this)
            }
        }

        return song;     
    }

    makeNumeral(numeral : number):Numeral|undefined {
        return [
            undefined,
            new I(),
            new II(),
            new III(),
            new IV(),
            new V()
        ][Math.ceil(numeral)]
    }
}
