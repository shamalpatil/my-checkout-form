import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnInit() {
      console.log(`ngOnInit`)
  }
  ngOnChanges() {
    console.log(`ngOnChanges`)
  }
  ngDoCheck() {
    console.log(`ngDoCheck`)
  }
  ngAfterContentInit() {
    console.log(`ngAfterContentInit`)
  }
  ngAfterContentChecked() {
    console.log(`ngAfterContentChecked`)
  }
  ngAfterViewInit() {
    console.log(`ngAfterViewInit`)
  }
  ngAfterViewChecked() {
    console.log(`ngAfterViewChecked`)
  }
  ngOnDestroy() {
    console.log(`ngOnDestroy`)
  }
} 

