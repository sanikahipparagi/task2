import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Bill } from './bills.model';
import { dummyBills } from './dummy-bills';

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  // private baseUrl = 'http://localhost:8080/bills'; // Replace with actual backend API URL

  // constructor(private http: HttpClient) {}

  // getBills(page: number, size: number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}?page=${page}&size=${size}`);
  // }

  // getBillById(id: number): Observable<Bill> {
  //   return this.http.get<Bill>(`${this.baseUrl}/${id}`);
  // }

  getBills(): Observable<any[]> {
    return of(dummyBills); // Return the dummy data as an observable
}

  getBillById(id: number): Observable<Bill> {
    const bills = [
      { id: 1, date: '2023-09-01', amount: 100, status: 'Unpaid' },
      { id: 2, date: '2023-08-01', amount: 150, status: 'Paid' }
    ];
  
    const bill = bills.find(b => b.id === id);
  
  if (bill) {
    return of(bill);
  } else {
    throw new Error(`No bill found with ID: ${id}`);
  }
}
}
