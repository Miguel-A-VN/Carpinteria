import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Logo } from '../logo/logo';

@Component({
  selector: 'app-card-xl',
  imports: [Logo],
  templateUrl: './card-xl.html',
  styleUrl: './card-xl.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardXL {

}
