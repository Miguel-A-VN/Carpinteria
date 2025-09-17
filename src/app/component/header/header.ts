// header.ts (padre)
import { Component, signal } from '@angular/core';
import { Logo } from '../logo/logo';
import { Nav } from '../nav/nav';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Logo, Nav],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  items = signal([
    { label: 'Inicio', route: '/' },
    { label: 'Categorias', route: '/categories' },
    { label: 'Sobre nosotros', route: '/about' },
    { label: 'Contacto', route: '/contact' },
  ]);
}
