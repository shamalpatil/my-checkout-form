import { Component, OnInit } from '@angular/core';
import { SampleService } from './sample.service';
import { AggrService } from './aggr.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  //providers: [SampleService]
})
export class ServicesComponent implements OnInit {
  
  cntr: number = 0
  constructor(
    private service: SampleService,
    private aggr: AggrService
  ) { }

  ngOnInit() {
  }

  onInr() {
   this.cntr = this.service.cnt++
  }
}

