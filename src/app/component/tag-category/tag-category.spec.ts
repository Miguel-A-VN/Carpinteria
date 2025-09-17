import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagCategory } from './tag-category';

describe('TagCategory', () => {
  let component: TagCategory;
  let fixture: ComponentFixture<TagCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
