import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appHighlightCard]',
  standalone: true,
})
export class HighlightCard {

  private el = inject(ElementRef);

  @HostListener('mouseenter') onMouseEnter() {
    this.applyStyle('scale(1.02)', 'rgba(0,0,0,0.1) 0px 10px 15px -3px');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.applyStyle('scale(1)', 'none');
  }

  private applyStyle(transform: string, shadow: string) {
    this.el.nativeElement.style.transform = transform;
    this.el.nativeElement.style.boxShadow = shadow;
    this.el.nativeElement.style.transition = 'all 0.3s ease';
  }
}
