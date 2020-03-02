import { SongFactory } from "./SongFactory";

export type SongModel = {
    uuid : string;
    title: string;
    bars : SongBarModel[];
    config : SongConfig;

};

export type SongBarModel = {
    uuid : string;
    lyrics: string;
    beats: BeatModel[];
};

export type SongConfig = {
    bpm: number;
    key: number;
};

export type BeatModel = {
    numeral : Numeral|undefined
}

export interface Numeral {
    getValue():string,
    getIndex():number
}

export class I implements Numeral {
    getValue():string{
        return "I";
    }
    getIndex():number{
        return 1;
    }
}

export class II implements Numeral {
    getValue():string{
        return "II";
    }
    getIndex():number{
        return 2;
    }
}

export class III implements Numeral {
    getValue():string{
        return "III";
    }
    getIndex():number{
        return 3;
    }
}

export class IV implements Numeral {
    getValue():string{
        return "IV";
    }
    getIndex():number{
        return 4;
    }
}

export class V implements Numeral {
    getValue():string{
        return "V";
    }
    getIndex():number{
        return 5;
    }
}

export interface SongType {
    key: number,
    label: string,
    description : string,
    getBars(factory:SongFactory):SongBarModel[]
}

export class ThreeChord implements SongType {

    key = 0
    label = '3 Chord'
    description = 'Poppy or sad; Simple 3 chord progression can do it all'
    getBars(factory:SongFactory):SongBarModel[]{
   
        const CHORD_1 = factory.makeNumeral(1)
        const CHORD_2 = factory.makeNumeral(Math.floor(Math.random() * 5))
        const CHORD_3 = factory.makeNumeral(Math.floor(Math.random() * 5))
        
        
        const VERSE = factory.makeBar()        
        VERSE.beats[0].numeral = CHORD_1
        VERSE.beats[1].numeral = CHORD_2
        VERSE.beats[2].numeral = CHORD_3
        VERSE.beats[3].numeral = CHORD_1

        const CHORUS = factory.makeBar()
        CHORUS.beats[0].numeral = CHORD_3
        CHORUS.beats[1].numeral = CHORD_1
        CHORUS.beats[2].numeral = CHORD_2
        CHORUS.beats[3].numeral = CHORD_1

        return [
            VERSE,CHORUS, VERSE, CHORUS
        ]        
        
    }
}
