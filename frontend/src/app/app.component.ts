import { Component } from '@angular/core';
import { SearchComponent } from "./search/search.component";
import { NavComponent } from "./nav/nav.component";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, SearchComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Stock_Management';
}
