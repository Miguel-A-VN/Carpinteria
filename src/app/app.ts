import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Header } from './component/header/header';
import { Footer } from './component/footer/footer';
import { ButtonWhatsapp } from './component/button-whatsapp/button-whatsapp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule , Header, Footer, ButtonWhatsapp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('carpinteria');
}
