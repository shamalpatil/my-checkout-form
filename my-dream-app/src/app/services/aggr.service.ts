import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { SampleService } from './sample.service';

@Injectable()
export class AggrService {

  constructor(
    private data : DataService,
    private sample: SampleService
  ) { }
}
