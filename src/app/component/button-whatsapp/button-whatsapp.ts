import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-whatsapp',
  standalone: true,
  imports: [],
  templateUrl: './button-whatsapp.html',
  styleUrls: ['./button-whatsapp.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonWhatsapp {
  @Input() linkw: string = 'https://api.whatsapp.com/send?phone=573234319119&text=Hola me gustaría tener mas información.';
}
