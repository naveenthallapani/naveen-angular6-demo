import { Directive, OnInit,Input,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appSlideshow]'
})

export class SlideshowDirective{

  constructor(private pl:ElementRef) { }
 
 @Input() color : string;
 @Input('appSlideshow') hightlightcolor:string;

 @HostListener("mouseenter") onMouseEnter(){
   this.highlight('red');
 }
 @HostListener('mouseleave') onMouseLeave() {
  this.highlight(null);
}

 private highlight(color:string){
   this.pl.nativeElement.style.backgroundcolor = color
 }
 



} 