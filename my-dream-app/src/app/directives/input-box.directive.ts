import { Directive, OnInit,  HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputBox]'
})
export class InputBoxDirective {

  constructor() { }

  @HostBinding('style.width')
   inwi: string;

   @Input()
   dfCl: string;

   ngOnInit(){
     this.inwi = this.dfCl;
   }

   widthc() {
      this.inwi =  `300px`;
       console.log(this.inwi);
    }
     widtho() {
       this.inwi =  `100px`;
        console.log(this.inwi);
   }
      @HostListener('mouseenter')
       msIn() {
       this.widthc();
     }
      @HostListener('mouseleave')
       msout() {
        this.widtho();
}
}