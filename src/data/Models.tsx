export type SongModel = {
    title: string;
    bars : SongBarModel[];
    config : SongConfig;

};

export type SongBarModel = {
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