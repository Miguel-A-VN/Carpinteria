import { Component, Input } from '@angular/core';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  @Input() label = '';
  @Input() route = '';
}
