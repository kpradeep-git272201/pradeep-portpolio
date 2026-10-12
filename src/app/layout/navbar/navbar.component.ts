import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';

export interface NavLinkItem {
  readonly label: string;
  readonly target: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  readonly portfolioService = inject(PortfolioService);
  readonly isMobileMenuOpen = signal<boolean>(false);

  readonly navItems: readonly NavLinkItem[] = [
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Experience', target: 'experience' },
    { label: 'Projects', target: 'projects' },
    { label: 'Education', target: 'education' },
    { label: 'Contact', target: 'contact' }
  ];

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((v) => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  onNavClick(target: string): void {
    this.portfolioService.scrollToSection(target);
    this.closeMobileMenu();
  }

  toggleTheme(): void {
    this.portfolioService.toggleTheme();
  }
}
