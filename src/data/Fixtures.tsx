import {SongModel, SongBarModel, I, II, III, IV, V} from './Models';

export const TEST_BAR: SongBarModel = {
    lyrics : 'Example lyric',
    numerals : [new I, new II, new I, new IV]
}

export const TEST_SONG: SongModel = {
    title: 'Test Song',
    bars : [
        TEST_BAR,
        TEST_BAR,
        TEST_BAR
    ]
};