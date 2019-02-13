import { Injectable,  EventEmitter } from '@angular/core';
import { InfoEmoji } from './progress/info-emoji';

@Injectable({
  providedIn: 'root'
})
export class ComService {

  private progress : number = 0 
  private prgEm : EventEmitter<InfoEmoji> = new EventEmitter()

  constructor() { }

  plus() {
    this.progress = this.progress>= 100 ? this.progress =100 : this.progress +=25;
    console.log(this.progress)
    
  }

  minus() {
    this.progress =this.progress<= 0 ? this.progress =0 : this.progress -=25;
    console.log(this.progress)
   
  } 

  makeProgress( what : number) {
   if(what == 1) this.plus()
   else this.minus()
   this.prgEm.emit
  }
}
