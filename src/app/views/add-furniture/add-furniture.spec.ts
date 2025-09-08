import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFurniture } from './add-furniture';

describe('AddFurniture', () => {
  let component: AddFurniture;
  let fixture: ComponentFixture<AddFurniture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFurniture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFurniture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
