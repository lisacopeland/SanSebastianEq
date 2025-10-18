import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  submitting = signal(false);
  submitted = signal(false);

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    message: ['', [Validators.required, Validators.minLength(10)]],
    agree: [false, [Validators.requiredTrue]],
  });
  }

  get f() { return this.form.controls; }

  async submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitting.set(true);

    try {
      // TODO: wire this to your backend (SES, Formspree, etc.)
      // Example: await this.http.post('/api/contact', this.form.value).toPromise();
      await new Promise(r => setTimeout(r, 700)); // demo delay
      this.submitted.set(true);
      this.form.reset({ agree: false });
    } finally {
      this.submitting.set(false);
    }
  }
}
