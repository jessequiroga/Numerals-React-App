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
        console.log('Numeral changed', song, this.beatIndex, this.barIndex, this.numeral)
        song.bars[this.barIndex].beats[this.beatIndex].numeral = this.numeral
    }
}

export class BarLyricHandler implements SongHandler {
    beatIndex!: number
    barIndex!: number
    numeral!: Numeral
    lyric!: string
    handle(song: SongModel): void {
        console.log('Lyric changed...', song, this.barIndex, this.lyric)
        song.bars[this.barIndex].lyrics = this.lyric
    }
}

export class BarRemoveHandler implements SongHandler {
    barIndex!: number
    handle(song: SongModel): void {
        console.log(song.bars, this.barIndex)
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
        console.log('Adding Bar...', song, this.barNum)
        var songFactory = new SongFactory(song.config)
        for (var i = 0; i < this.barNum; i++) {
            song.bars.push(songFactory.makeBar())
        }
    }
}

export class BarMoveHandler implements SongHandler {
    up!: boolean
    barIndex!: number
    allTheWay!: boolean
    handle(song: SongModel): void {
        console.log('Moving Bar...', song, this.up, this.barIndex)
        var tmpIndex = this.barIndex 
        var totalBars = song.bars.length
        
        // Zero is the top, so up is down here
        if (this.up && tmpIndex != 0) {
            tmpIndex = this.allTheWay ? 0 : tmpIndex - 1
        } else if (tmpIndex < totalBars) {
            tmpIndex = this.allTheWay ? totalBars - 1 : tmpIndex + 1
        }
        console.log(song.bars)
        var tmpBar = song.bars[tmpIndex];

        song.bars[tmpIndex] = song.bars[this.barIndex]
        song.bars[this.barIndex] = tmpBar
        console.log(song.bars)

    }
}

export class BarDuplicateHandler implements SongHandler {
    barIndex!:number
    handle(song: SongModel): void {
       console.log('Duplicating Bar... ()', song, this.barIndex)
       var songFactory = new SongFactory(song.config)
       var newBar = {...song.bars[this.barIndex]};
       newBar.uuid = songFactory.makeUUID()
       song.bars.push(newBar) 
    }
}

export class ConfigHandler implements SongHandler {
    config!: SongConfig
    handle(song: SongModel): void {
        console.log('Setting Config...', song, this.config)
        song.config = this.config
    }
}

export class SongTitleHandler implements SongHandler {
    title!: string
    handle(song: SongModel): void {
        console.log('Updating title...', this.title)
        song.title = this.title
    }
}
