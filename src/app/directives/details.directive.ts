import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDetails]'
})
export class DetailsDirective {

  constructor(private e: ElementRef, private r: Renderer2) { }            
    
      @Input('appDetails') elementDetails!: any[];
    
      @HostListener('mouseleave')
      entrarMouse(){
        for( let e of this.elementDetails){
          console.log(e.style.display);
          if(e.style.display == '') this.r.setStyle(e,'display','inline');
          else  this.r.setStyle(e,'display','inline');
        }
       }
      @HostListener('mouseenter')
      presionarMouse(){
        for( let e of this.elementDetails){
          console.log(e.style.display);
          if(e.style.display == '') this.r.setStyle(e,'display','block');
          else  this.r.setStyle(e,'display','block');
        }
       }
  
    
     

}
