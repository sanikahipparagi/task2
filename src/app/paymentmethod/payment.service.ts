import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface PaymentHistoryEntry {
  id: number;
  date: string;
  amount: number;
  method: string;
  status: string;
  meterNumber: string; // Add meterNumber
  paymentMode: string;  
}

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private paymentAmount: number = 0;
  private paymentMethod: string = '';
  private paymentHistory: PaymentHistoryEntry[] = [];
  private historyIdCounter: number = 1;

  // constructor(private http: HttpClient) {} // Inject HttpClient

  setPaymentAmount(amount: number) {
    this.paymentAmount = amount;
  }

  getPaymentAmount(): number {
    return this.paymentAmount;
  }

  setPaymentMethod(method: string) {
    this.paymentMethod = method;
  }

  getPaymentMethod(): string {
    return this.paymentMethod;
  }

  processPayment(): Observable<{ success: boolean; referenceNumber?: string }> {
    const success = Math.random() > 0.5; // Simulate success or failure
    const referenceNumber = success ? this.generateReferenceNumber() : undefined;

    // For cash payments, add to payment history directly
    if (this.paymentMethod === 'Cash') {
      this.updatePaymentHistory(this.paymentAmount, 'Cash', success ? 'Completed' : 'Failed','12345','Offline');
    }

    return of({ success, referenceNumber });
  }

  private updatePaymentHistory(amount: number, method: string, status: string,meterNumber:string,paymentMode:string) {
    const entry: PaymentHistoryEntry = {
      id: this.historyIdCounter++,
      date: new Date().toISOString(),
      amount,
      method,
      status,
      meterNumber,
      paymentMode
    };
    this.paymentHistory.push(entry);
  }

  getPaymentHistory(): PaymentHistoryEntry[] {
    return this.paymentHistory;
  }

  // generateInvoice(paymentId: number): Observable<Blob> {
  //   return this.http.get(`/api/invoice/${paymentId}`, { responseType: 'blob' });
  // }

  private generateReferenceNumber(): string {
    return 'REF-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  }
}