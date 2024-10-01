import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-paymentmethod',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './paymentmethod.component.html',
  styleUrl: './paymentmethod.component.css'
})
export class PaymentmethodComponent {

  selectedMethod: string = '';

  constructor(private router: Router, private paymentService: PaymentService) { }

  selectMethod(method: string) {
    // Just set the selectedMethod, don't navigate yet
    this.selectedMethod = method;
    this.paymentService.setPaymentMethod(this.selectedMethod);
  }

  proceedWithSelectedMethod() {
    if (this.selectedMethod === 'Cash') {
      // Handle cash payment by showing instructions or redirecting
      this.router.navigate(['/layout/cashPayment']);
    } else {
      // Proceed with other online payment methods
      this.router.navigate(['/layout/paymentConfirmation']);
    }
  }

}
