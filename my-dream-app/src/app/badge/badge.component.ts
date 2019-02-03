import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {

  @Input()
  ntTxt : string;

  @Input()
  ntCnt : number;

  @Output()
  ntClk : EventEmitter<number> = new EventEmitter()
  
  constructor() { }


  ngOnInit() {
  }

  btnClk() {
    console.log( 'Notification clicked' )
    this.ntClk.emit(this.ntCnt)
  }

}
