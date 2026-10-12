import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  readonly portfolioService = inject(PortfolioService);

  onNavigate(sectionId: string): void {
    this.portfolioService.scrollToSection(sectionId);
  }
}
