import { Component, OnInit } from '@angular/core';
import { InfoEmoji } from '../progress/info-emoji';

@Component({
  selector: 'app-inter-comp-v1',
  templateUrl: './inter-comp-v1.component.html',
  styleUrls: ['./inter-comp-v1.component.css']
})
export class InterCompV1Component implements OnInit {

   progress = 0;

  constructor() {
    }

  ngOnInit() {
  }

}
