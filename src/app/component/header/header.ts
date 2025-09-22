// header.ts (padre)
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Logo } from '../logo/logo';
import { Nav } from '../nav/nav';
import { filter, map, Observable, startWith } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, Logo, Nav],
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

  currentUrl$: Observable<string>;

  constructor(private router: Router) {
    this.currentUrl$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event: any) => event.urlAfterRedirects),
      startWith(this.router.url)
    );
  }
}
