import { Component, inject } from '@angular/core';
import { CardXL } from '../../component/card-xl/card-xl';
import { ArticlesService } from '../../services/articles';

@Component({
  selector: 'app-hero',
  imports: [CardXL],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  articlesService = inject(ArticlesService);

   logRecent() {
    console.log(this.articlesService.recentArticles()); // 🔹 array de artículos
  }

  addView(id: number) {
    this.articlesService.addView(id); // 🔹 actualiza el signal
  }
}
