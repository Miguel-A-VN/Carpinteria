import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card-xl',
  standalone: true,
  imports: [NgClass],
  templateUrl: './card-xl.html',
  styleUrl: './card-xl.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardXL {
  sections = [
    { title: 'Mesa de Cedro', text: 'Texto de la primera sección', image: 'https://res.cloudinary.com/dwfblxcgq/image/upload/v1758558178/mesa_circular_y_dos_sillas_de_comino_wwlkws.jpg' },
    { title: 'Puerta', text: 'Texto de la segunda sección', image: 'https://res.cloudinary.com/dwfblxcgq/image/upload/v1758558171/puertaentamborada2_xdx7b4.jpg' },
    { title: 'Armario de comino', text: 'Texto de la tercera sección', image: 'https://res.cloudinary.com/dwfblxcgq/image/upload/v1758558201/Armariodecomino_dnb4wo.jpg' },
    
  ];
}
