import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  activeSection: string = 'income';
   showSection(section: string): void {
    this.activeSection = section;
    
    // Update active class on sidebar links
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
      link.classList.remove('active');
      if (link.querySelector(`span`)?.textContent?.toLowerCase().includes(section)) {
        link.classList.add('active');
      }
    });
  }
}
