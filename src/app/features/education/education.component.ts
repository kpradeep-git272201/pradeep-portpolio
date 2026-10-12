import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationComponent {
  readonly portfolioService = inject(PortfolioService);
}
