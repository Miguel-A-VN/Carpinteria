import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWhatsapp } from './button-whatsapp';

describe('ButtonWhatsapp', () => {
  let component: ButtonWhatsapp;
  let fixture: ComponentFixture<ButtonWhatsapp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonWhatsapp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonWhatsapp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
