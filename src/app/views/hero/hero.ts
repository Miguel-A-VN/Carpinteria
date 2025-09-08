import { Component } from '@angular/core';
import { CardXL } from '../../component/card-xl/card-xl';

@Component({
  selector: 'app-hero',
  imports: [CardXL],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {}
