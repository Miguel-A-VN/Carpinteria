import { ArticlesService } from './articles';

export async function getUniqueCategories() {
  const service = new ArticlesService();
  const articles = service.articles();
  const categoriesSet = new Set<string>();

  articles.forEach(article => {
    article.categories.forEach(cat => categoriesSet.add(cat.titleCategory));
  });

  return Array.from(categoriesSet).map(titleCategory => ({ nameCategory: titleCategory }));
}
