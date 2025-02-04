import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FeaturesComponent } from "../../shared/features/features.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeaderComponent, FeaturesComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
