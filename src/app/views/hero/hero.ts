import { Component } from '@angular/core';
import { Card } from '../../component/card/card';

@Component({
  selector: 'app-hero',
  imports: [Card],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {

}
