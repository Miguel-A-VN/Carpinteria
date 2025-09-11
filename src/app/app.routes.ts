import { Routes } from '@angular/router';
import { About } from './views/about/about';
import { Hero } from './views/hero/hero';
import { Catalog } from './views/catalog/catalog';
import { Contact } from './views/contact/contact';
import { AddFurniture } from './views/add-furniture/add-furniture';

export const routes: Routes = [

    { path: '', component: Hero },
    { path: 'about', component: About, title: 'Sobre Nosotro' },
    { path: 'catalog', component: Catalog, title: 'Catalogo' },
    { path: 'contact', component: Contact, title: 'Contacto' },
    { path: 'add', component: AddFurniture, title: 'Añadir Muebles' },
];
