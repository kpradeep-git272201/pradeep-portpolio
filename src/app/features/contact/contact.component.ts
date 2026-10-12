import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ContactFormModel } from '../../core/models/portfolio.model';

export type ContactFormField = keyof ContactFormModel;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder).nonNullable;
  readonly portfolioService = inject(PortfolioService);

  readonly contactForm: FormGroup<{
    name: FormControl<string>;
    email: FormControl<string>;
    subject: FormControl<string>;
    message: FormControl<string>;
  }> = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: [''],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  isFieldInvalid(fieldName: ContactFormField): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const { name, email, subject, message } = this.contactForm.getRawValue();

    const success = await this.portfolioService.submitContactForm({
      name,
      email,
      subject: subject.trim() || 'Portfolio Inquiry',
      message,
      timestamp: new Date()
    });

    if (success) {
      this.contactForm.reset({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      this.contactForm.markAsPristine();
      this.contactForm.markAsUntouched();
    }
  }

  dismissAlert(): void {
    this.portfolioService.resetContactStatus();
  }
}
