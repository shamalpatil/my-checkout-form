import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation',
  templateUrl: './view-encapsulation.component.html',
  styleUrls: ['./view-encapsulation.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class ViewEncapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
