import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  usNm: string;
  
  constructor(
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit() {
    this.usNm = this.activatedRoute.snapshot.params['usNm'];
  }

  changeUsNm(usNm: string) {
    this.usNm = usNm;
  }
}
