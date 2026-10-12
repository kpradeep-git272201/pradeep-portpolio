import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';

export interface KeyHighlight {
  readonly icon: 'architecture' | 'performance' | 'enterprise' | 'grid';
  readonly title: string;
  readonly desc: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  readonly portfolioService = inject(PortfolioService);

  readonly keyHighlights: readonly KeyHighlight[] = [
    {
      icon: 'architecture',
      title: 'Full-Stack Architecture',
      desc: 'Extensive hands-on experience unifying Spring Boot backends with Angular frontend clients using clean patterns.'
    },
    {
      icon: 'performance',
      title: 'High-Throughput Performance',
      desc: 'Optimized PostgreSQL and Oracle queries resulting in over 35% latency reduction across mission-critical reports.'
    },
    {
      icon: 'enterprise',
      title: 'National Scale Systems',
      desc: 'Core developer in eGramSwaraj (NICSI / MoPR), touching over 250,000 local bodies nationwide.'
    },
    {
      icon: 'grid',
      title: 'Ag-Grid & Data Virtualization',
      desc: 'Deep mastery of Ag-Grid Enterprise, handling 100K+ data rows with custom cell renderers and virtual scrolling.'
    }
  ];

  onContactClick(): void {
    this.portfolioService.scrollToSection('contact');
  }

  onProjectsClick(): void {
    this.portfolioService.scrollToSection('projects');
  }
}
