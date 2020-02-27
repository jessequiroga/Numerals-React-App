import { SongModel, Numeral, SongConfig } from "../data/Models"
import { SongFactory } from "../data/SongFactory"

export interface SongHandler {
    handle(song: SongModel): void
}

export class NumeralHandler implements SongHandler {
    beatIndex!: number
    barIndex!: number
    numeral!: Numeral
    handle(song: SongModel): void {
        song.bars[this.barIndex].beats[this.beatIndex].numeral = this.numeral
    }
}

export class BarRemoveHandler implements SongHandler {
    barIndex!: number
    handle(song: SongModel): void {
        console.log(song.bars)
        var tmpBars = song.bars
        var self = this
        var filteredBars = tmpBars.filter(function(value, index, arr){
            return index !== self.barIndex
        });
        song.bars = filteredBars
        console.log(song.bars)
    }
}

export class BarAddHandler implements SongHandler {
    barNum!:number
    handle(song: SongModel): void {
        console.log(this.barNum)
        console.log(song)
        var songFactory = new SongFactory(song.config)
        for (var i = 0; i < this.barNum; i++) {
            song.bars.push(songFactory.makeBar())
        }
    }
}

export class ConfigHandler implements SongHandler {
    config!: SongConfig
    handle(song: SongModel): void {
        song.config = this.config
    }
}
