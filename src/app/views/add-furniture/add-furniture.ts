import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Button } from "../../component/button/button";

@Component({
  selector: 'app-add-furniture',
  imports: [Button],
  templateUrl: './add-furniture.html',
  styleUrl: './add-furniture.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddFurniture {

}
