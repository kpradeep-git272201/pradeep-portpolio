import {
  Component,
  ChangeDetectionStrategy,
  HostListener,
  inject,
  PLATFORM_ID,
  DestroyRef
} from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectDetailComponent {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  readonly portfolioService = inject(PortfolioService);

  constructor() {
    // Ensure body scroll is safely restored if component unmounts while modal is active
    this.destroyRef.onDestroy(() => {
      if (isPlatformBrowser(this.platformId) && this.document?.body) {
        this.document.body.style.overflow = 'auto';
      }
    });
  }

  // Close on Escape key
  @HostListener('document:keydown.escape')
  onEscapePress(): void {
    if (isPlatformBrowser(this.platformId) && this.portfolioService.selectedProject()) {
      this.closeModal();
    }
  }

  closeModal(): void {
    this.portfolioService.selectProject(null);
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.closeModal();
    }
  }
}
