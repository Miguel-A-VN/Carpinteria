import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Button } from '../button/button';

@Component({
  selector: 'app-card-xl',
  standalone: true,
  imports: [NgClass, Button],
  templateUrl: './card-xl.html',
  styleUrl: './card-xl.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardXL {
  @Input() article!: { id: number; title: string; text: string; image: string };
  @Input() index!: number;
}
