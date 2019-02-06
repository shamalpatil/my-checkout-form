import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { InfoEmoji } from '../progress/info-emoji';

@Component({
  selector: 'app-emojis',
  templateUrl: './emojis.component.html',
  styleUrls: ['./emojis.component.css']
})
export class EmojisComponent implements OnInit, OnChanges {

  @Input()
  emoji: number;

  emojiInfo : InfoEmoji;

  infoEmojis = new Array<InfoEmoji>()

  constructor() {
    this.infoEmojis.push(
      new InfoEmoji('../../assets/images/sad.svg','The good times of today, are the sad thoughts of tomorrow.'),
      new InfoEmoji('../../assets/images/confused.svg','The good times of today'),
      new InfoEmoji('../../assets/images/happy.svg','The good times of today, are the sad thoughts of tomorrow.'),
      new InfoEmoji('../../assets/images/smiling.svg','The good times of today, are the sad thoughts of tomorrow.'),
    )
    this.emojiInfo = this.infoEmojis[0]
   }

  ngOnInit() {
    if(this.emoji == 0) {
      this.emojiInfo = this.infoEmojis[0]
    } else if (this.emoji == 25) {
      this.emojiInfo = this.infoEmojis[1]
    } else if (this.emoji == 75) {
      this.emojiInfo = this.infoEmojis[2]
    } else {
      this.emojiInfo = this.infoEmojis[3]
    }

  }

  ngOnChanges() {
    if(this.emoji == 0) {
      this.emojiInfo = this.infoEmojis[0]
    } else if (this.emoji == 25) {
      this.emojiInfo = this.infoEmojis[1]
    } else if (this.emoji == 75) {
      this.emojiInfo = this.infoEmojis[2]
    } else {
      this.emojiInfo = this.infoEmojis[3]
    }

  }
}
