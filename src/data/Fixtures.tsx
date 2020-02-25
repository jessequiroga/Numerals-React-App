import * as m from './Models';

export const TEST_BAR_BEAT_EMPTY: m.BeatModel = {
    numeral : undefined
}

export const TEST_BAR_BEAT_I: m.BeatModel = {
    numeral : new m.I
}

export const TEST_BAR_BEAT_II: m.BeatModel = {
    numeral : new m.II
}

export const TEST_BAR_BEAT_III: m.BeatModel = {
    numeral : new m.III
}

export const TEST_BAR_BEAT_IV: m.BeatModel = {
    numeral : new m.IV
}

export const TEST_BAR_BEAT_V: m.BeatModel = {
    numeral : new m.V
}

export const TEST_BAR_1: m.SongBarModel = {
    lyrics : 'Floral fish gravy',
    beats : [TEST_BAR_BEAT_I, TEST_BAR_BEAT_IV, TEST_BAR_BEAT_EMPTY, TEST_BAR_BEAT_EMPTY]
}

export const TEST_BAR_2: m.SongBarModel = {
    lyrics : 'Oh how it feels to shit in a bell',
    beats : [TEST_BAR_BEAT_EMPTY, TEST_BAR_BEAT_IV, TEST_BAR_BEAT_EMPTY, TEST_BAR_BEAT_II]
}

export const TEST_CONFIG: m.SongConfig = {
    bpm : 4,
    key: 1
}

export const TEST_SONG: m.SongModel = {
    title: 'Shitting in a Bell',
    bars : [
        TEST_BAR_1,
        TEST_BAR_1,
        TEST_BAR_2
    ],
    config : TEST_CONFIG
};


export const TEST_SONG_2: m.SongModel = {
    title: 'Love is a battlefield',
    bars : [
        TEST_BAR_1,
        TEST_BAR_2,
        TEST_BAR_1
    ],
    config : TEST_CONFIG
};

export const TEST_SONG_3: m.SongModel = {
    title: 'Home on the range',
    bars : [
        TEST_BAR_1,
        TEST_BAR_2,
        TEST_BAR_2
    ],
    config : TEST_CONFIG
};


export const SONGS = [TEST_SONG, TEST_SONG_2, TEST_SONG_3]

