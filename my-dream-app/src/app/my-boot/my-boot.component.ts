import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-boot',
  templateUrl: './my-boot.component.html',
  styleUrls: ['./my-boot.component.css']
})
export class MyBootComponent implements OnInit {

  isOp = true

  rows = [
    { name: 'shamal', gender: 'female', company: 'tcs'},
    { name: 'dolly', gender: 'male', company: 'infi'},
    { name: 'anky', gender: 'male', company: 'wipro'}
  ];

  columns = [
    { prop: 'name'},
    { name: 'gender'},
    { name: 'company'}
  ];
  
  constructor() { }

  ngOnInit() {
  }
  close() {
    console.log(`it is closed`)
  }

}
