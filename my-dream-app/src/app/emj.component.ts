import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emj',
  template: `
  <div class="card" style="width: 18rem;">
  <img [src]="emojiInfo.emoji" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">{{emojiInfo.info}}</p>
  </div>
</div>
  `,
  styles: []
})
export class EmjComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
