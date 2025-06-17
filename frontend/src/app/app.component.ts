import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { NavComponent } from "./nav/nav.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Stock_Management';
}
