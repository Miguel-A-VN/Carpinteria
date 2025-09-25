import { Component, inject, computed, Input } from '@angular/core';
import { Card } from '../../component/card/card';
import { ArticlesService } from '../../services/articles';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-catalog',
  imports: [Card],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class Catalog {
  private route = inject(ActivatedRoute);
  articlesService = inject(ArticlesService);

  // 🔹 Convertimos paramMap en signal
  paramMapSignal = toSignal(this.route.paramMap);

  // 🔹 Extraemos la categoría desde la URL
  @Input() categoryParam = computed(() => this.paramMapSignal()?.get('nameCategory') ?? '');

  // 🔹 Pasamos el signal completo (no categoryParam())
  articlesByCategory = this.articlesService.getArticlesByCategory(this.categoryParam);
}
