import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardCategory } from '../../component/card-category/card-category';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CardCategory],
  templateUrl: './categories.html',
  styleUrls: ['./categories.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Categories {
  listCategories = [
    {
      title: 'sillas',
      imageUrlCategory: '/images/categories/mesaysilla.jpg',
    },
    {
      title: 'mesas',
      imageUrlCategory: '/images/categories/Mesa.jpg',
    },
  ];
}
