import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardXL } from './card-xl';

describe('CardXL', () => {
  let component: CardXL;
  let fixture: ComponentFixture<CardXL>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardXL]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardXL);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
