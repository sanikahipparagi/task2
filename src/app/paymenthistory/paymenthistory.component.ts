import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../paymentmethod/payment.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paymenthistory',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './paymenthistory.component.html',
  styleUrl: './paymenthistory.component.css'
})
export class PaymenthistoryComponent  {

  history: Array<{ id: number, date: string, amount: number, status: string, meterNumber: string, paymentMode: string }> = [];

  constructor(private paymentService: PaymentService) {
    this.history = this.paymentService.getPaymentHistory();
  }

  // downloadInvoice(paymentId: number) {
  //   this.paymentService.generateInvoice(paymentId).subscribe(blob => {
  //     const url = window.URL.createObjectURL(blob);
  //     const a = document.createElement('a');
  //     a.href = url;
  //     a.download = `invoice_${paymentId}.pdf`; // You can customize the filename here
  //     document.body.appendChild(a);
  //     a.click();
  //     document.body.removeChild(a);
  //   });
  // }
}
