import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  @Input()
  private date: Date;
  private paragraph;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.paragraph = this.renderer.createElement('p');
  }

  @HostListener('mouseenter')
  showDateOnMouseEnter(): void {
    this.paragraph.innerHTML = 'Created: ' + this.date.toLocaleString();
    this.renderer.appendChild(this.elementRef.nativeElement, this.paragraph);
  }

  @HostListener('mouseleave')
  hiddenDateOnMouseLeave(): void {
    this.renderer.removeChild(this.elementRef.nativeElement, this.paragraph);
  }

}
