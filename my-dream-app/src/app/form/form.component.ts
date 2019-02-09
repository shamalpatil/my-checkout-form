import { Component, OnInit } from '@angular/core';
import { User } from '../form/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  topics = ['Angular', 'React', 'view'];

  userModel = new User ('Rob', 'rob@test.com', 5566556655, '', 'morning', true);

  constructor() { }

  ngOnInit() {
  }

}
