import { RenderMode, ServerRoute } from '@angular/ssr';
import { getUniqueCategories } from './services/getUniqueCategories';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'category/:nameCategory',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return await getUniqueCategories();
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
