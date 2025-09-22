import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-img',
  standalone: true,
  imports: [],
  templateUrl: './article-img.html',
  styleUrls: ['./article-img.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleImg {
  @Input() urlImage: string = '';
  @Input() titleArticle: string = '';
  @Input() texts: string[] = [];
}
