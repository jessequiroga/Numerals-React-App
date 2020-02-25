import * as m from './Models';

export const NUMERALS = [
    { key: 1, label: 'I', value : new m.I()},
    { key: 2, label: 'II', value : new m.II()},
    { key: 3, label: 'III', value : new m.III()},
    { key: 4, label: 'IV', value : new m.IV() },
    { key: 5, label: 'V', value: new m.V()},
]

export const SCALE = [
    { key: 1, label: 'C' },
    { key: 2, label: 'D' },
    { key: 3, label: 'E' },
    { key: 4, label: 'F#' },
    { key: 5, label: 'G' },
    { key: 6, label: 'A' },
    { key: 7, label: 'B' }
]

export const BPM = [
    { key: 2, label: '2' },
    { key: 4, label: '4' },
   /* { key: 8, label: '8' },
    { key: 12, label: '12' }*/
]

export const SONG_TYPES = [
    { label: '3 Chord', key : 0, description : 'Poppy or sad; Simple 3 chord progression can do it all'},
    { label: '12 Bar Blues', key : 1, description : 'You wanna jam? You need to shred!?' },
    { label: 'Random', key : 1, description : 'Dealers choice brah' },
]