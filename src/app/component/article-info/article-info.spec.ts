import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleInfo } from './article-info';

describe('ArticleInfo', () => {
  let component: ArticleInfo;
  let fixture: ComponentFixture<ArticleInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
