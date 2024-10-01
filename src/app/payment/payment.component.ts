import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../paymentmethod/payment.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent  {

  amount: number=0;

  constructor(private router: Router, private paymentService: PaymentService) { }

  proceedToPaymentMethod() {
    this.paymentService.setPaymentAmount(this.amount);
    // Redirect to payment method selection
    this.router.navigate(['/paymentMethod']);
  }
}
