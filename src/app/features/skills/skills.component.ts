import { Component, ChangeDetectionStrategy, inject, signal, computed, Signal } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Skill, CategoryFilter } from '../../core/models/portfolio.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  readonly portfolioService = inject(PortfolioService);

  readonly selectedCategory = signal<CategoryFilter>('All');

  readonly categories: readonly CategoryFilter[] = [
    'All',
    'Frontend',
    'Backend',
    'Database',
    'DevOps & Tools'
  ];

  readonly filteredSkills: Signal<Skill[]> = computed(() => {
    const current = this.selectedCategory();
    const all = this.portfolioService.skills();
    if (current === 'All') {
      return all;
    }
    return all.filter((s) => s.category === current);
  });

  setCategory(category: CategoryFilter): void {
    this.selectedCategory.set(category);
  }
}
