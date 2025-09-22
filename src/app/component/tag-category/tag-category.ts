import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag-category',
  imports: [],
  templateUrl: './tag-category.html',
  styleUrl: './tag-category.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagCategory {
  @Input() titleCategory: string = '';
}
