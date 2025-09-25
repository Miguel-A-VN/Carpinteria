import { Routes, RouterModule } from '@angular/router';
import { About } from './views/about/about';
import { Hero } from './views/hero/hero';
import { Catalog } from './views/catalog/catalog';
import { Contact } from './views/contact/contact';
import { AddFurniture } from './views/add-furniture/add-furniture';
import { Categories } from './views/categories/categories';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: Hero },
  { path: 'about', component: About, title: 'Sobre Nosotro' },
  { path: 'categories', component: Categories, title: 'Categorias' },
  { path: 'category/:nameCategory', component: Catalog,
    data: {
      prerender: 'false',
      title: 'Categoria'
    } },
  { path: 'contact', component: Contact, title: 'Contacto' },
  { path: 'add', component: AddFurniture, title: 'Añadir Muebles' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
