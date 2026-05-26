import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HighlightCard } from './highlight-card';

@Component({
  standalone: true,
  imports: [HighlightCard],
  template: `<div appHighlightCard>Card</div>`,
})
class HostComponent {}

describe('HighlightCard', () => {
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    await fixture.whenStable();
  });

  it('should attach directive to element', () => {
    const el = fixture.debugElement.query(By.directive(HighlightCard));
    expect(el).toBeTruthy();
  });
});
