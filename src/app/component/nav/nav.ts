// nav.ts (hijo)
import { Component, Input, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItem } from '../nav-item/nav-item';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, NavItem],
  templateUrl: './nav.html',
  styleUrls: ['./nav.css'],
})
export class Nav {
  @Input() items!: Signal<{ label: string; route: string }[]>;
}
