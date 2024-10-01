import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { PaymentService } from '../payment.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cash-payment',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,RouterModule],
  templateUrl: './cash-payment.component.html',
  styleUrl: './cash-payment.component.css'
})
export class CashPaymentComponent {

  constructor(private paymentService: PaymentService,private router: Router) { }

  // Generate a unique payment slip ID
  generateSlipId(): string {
    return 'SLIP-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  }

  getPaymentAmount(): number {
    return this.paymentService.getPaymentAmount();
  }

}
