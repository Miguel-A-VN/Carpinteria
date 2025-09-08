import { Component, Input } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [Button],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string[] = [];
  @Input() categories: string[] = [];
}
