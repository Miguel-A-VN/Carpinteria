import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleImg } from './article-img';

describe('ArticleImg', () => {
  let component: ArticleImg;
  let fixture: ComponentFixture<ArticleImg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleImg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleImg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
