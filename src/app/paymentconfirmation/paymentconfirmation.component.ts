import { Component } from '@angular/core';
import { PaymentService } from '../paymentmethod/payment.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paymentconfirmation',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './paymentconfirmation.component.html',
  styleUrl: './paymentconfirmation.component.css'
})
export class PaymentconfirmationComponent {

  paymentStatus: string='';
  referenceNumber: string='';
  method: string;

  constructor(private paymentService: PaymentService, private router: Router) {
    this.method = this.paymentService.getPaymentMethod();
  }

  processPayment() {
    this.paymentService.processPayment().subscribe(result => {
      if (result.success) {
        this.paymentStatus = 'success';
        this.referenceNumber = result.referenceNumber || '';
      } else {
        this.paymentStatus = 'failure';
      }
    });
  }

  viewPaymentHistory() {
    this.router.navigate(['/paymentHistory']);
  }
}
