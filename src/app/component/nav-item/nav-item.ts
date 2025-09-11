import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-item',
  standalone: true,  
  imports: [RouterModule],
  templateUrl: './nav-item.html',
  styleUrls: ['./nav-item.css']
})
export class NavItem {
  @Input() label: string = '';
  @Input() route:  string = '';  
}
