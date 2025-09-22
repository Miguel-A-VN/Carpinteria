import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-category',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-category.html',
  styleUrl: './card-category.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardCategory {
  @Input() imageUrlCategory: string = '';
  @Input() titleCategory: string = '';
}
