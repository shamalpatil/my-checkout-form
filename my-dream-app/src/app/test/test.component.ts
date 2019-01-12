import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
        <h2>{{ name }}</h2>
        <h2>{{ name | lowercase}}</h2>
        <h2>{{ name | uppercase}}</h2>
        <h2>{{ name | titlecase}}</h2>
        <h2>{{ name | slice:3:5}}</h2>
                  `,
  styles: []  
})


  
export class TestComponent implements OnInit {

  public name = "Codevolution";
  public message = "Welcome to Codevolution";
  public person = {
    "firstName": "John",
    "lastName": "Doe"
  }

  constructor() { }

  ngOnInit() {
  }
  

}

