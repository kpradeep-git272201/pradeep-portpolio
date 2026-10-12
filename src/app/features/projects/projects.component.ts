import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Project } from '../../core/models/portfolio.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  readonly portfolioService = inject(PortfolioService);

  openProjectDetail(project: Project): void {
    this.portfolioService.selectProject(project);
  }
}
