import { Injectable, signal, computed, Signal } from '@angular/core';
import { ArticleInterface } from './articles.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  // 🔹 Estado principal (signal)
  private _articles = signal<ArticleInterface[]>([
    {
      id: 1,
      title: 'Juego de sillas y mesa coqueta de comino',
      text: 'Un elegante juego de comedor en madera de comino, compuesto por una mesa y sillas con un diseño coqueto y sofisticado. Su acabado natural resalta las vetas únicas de la madera, aportando calidez y distinción al ambiente. La mesa ofrece un espacio cómodo y resistente, mientras que las sillas, ergonómicas y decorativas, combinan funcionalidad y estilo. Ideal para salas, comedores o espacios sociales que buscan un toque de encanto artesanal y duradero.',
      image:
        'https://res.cloudinary.com/dwfblxcgq/image/upload/v1758558178/mesa_circular_y_dos_sillas_de_comino_wwlkws.jpg',
      categories: [
        {
          titleCategory: 'mesas',
          urlImage:
            'https://res.cloudinary.com/dwfblxcgq/image/upload/v1758558178/10584063_450828221779839_4774079512459263165_n_wypsph.jpg'
        },
        {
          titleCategory: 'sillas',
          urlImage:
            'https://res.cloudinary.com/dwfblxcgq/image/upload/v1758558178/mesa_circular_y_dos_sillas_de_comino_wwlkws.jpg'
        },
      ],
      active: true,
      views: 12,
      createdAt: new Date('2025-09-10'),
    },
    {
      id: 2,
      title: 'Puerta Entamborada',
      text: 'Fabricada con materiales de alta calidad, ligera y resistente a la vez. Su diseño con núcleo de panal y superficies lisas le otorgan estabilidad, durabilidad y un acabado elegante. Es ideal para interiores, ya que combina practicidad y estética, ofreciendo un aspecto moderno y uniforme que se adapta a cualquier estilo decorativo. Además, permite acabados en pintura, enchapado o laminado para personalizarla según el ambiente.',
      image:
        'https://res.cloudinary.com/dwfblxcgq/image/upload/v1758750395/ChatGPT_Image_Sep_24_2025_04_46_03_PM_h2ylsd.png',
      categories: [{ titleCategory: 'mesas', urlImage: '' }],
      active: true,
      views: 15,
      createdAt: new Date('2024-08-10'),
    },
    {
      id: 3,
      title: 'Armario de comino',
      text: 'Combina resistencia, elegancia y diseño atemporal. Su acabado natural resalta la belleza de las vetas propias de esta madera, aportando calidez y distinción a cualquier espacio. Con amplio espacio de almacenamiento y una estructura robusta, es perfecto para mantener la organización sin perder el estilo. Ideal para dormitorios, salas o espacios que buscan un toque artesanal y duradero.',
      image:
        'https://res.cloudinary.com/dwfblxcgq/image/upload/v1758749956/e400b4be-4f32-4c1e-a6a0-152ae0e2b1e7_jzqohk.png',
      categories: [{ titleCategory: 'mesas', urlImage: '' }],
      active: true,
      views: 12,
      createdAt: new Date('2025-09-10'),
    },
  ]);

  // 🔹 Exponer el estado principal (readonly)
  readonly articles = this._articles.asReadonly();

  // 🔹 Computados (se recalculan automáticamente si cambia `_articles`)
  readonly activeArticles = computed(() =>
    this._articles().filter(a => a.active)
  );

  readonly recentArticles = computed(() =>
    this.activeArticles()
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, 5)
  );

  readonly mostViewedArticles = computed(() =>
    this.activeArticles()
      .sort((a, b) => b.views - a.views)
      .slice(0, 3)
  );

  // 🔹 Mutaciones del estado
  addView(id: number) {
    this._articles.update(articles =>
      articles.map(a =>
        a.id === id ? { ...a, views: a.views + 1 } : a
      )
    );
  }

  toggleActive(id: number) {
    this._articles.update(articles =>
      articles.map(a =>
        a.id === id ? { ...a, active: !a.active } : a
      )
    );
  }

  getArticlesByCategory = (category: Signal<string>) =>
    computed(() =>
      this._articles().filter(article =>
        article.categories.some(cat =>
          cat.titleCategory.toLowerCase() === category().toLowerCase()
        )
      )
    );
}
