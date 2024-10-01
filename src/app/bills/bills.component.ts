import { Component, OnInit } from '@angular/core';
import { Bill } from './bills.model';
import { BillsService } from './bills.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-bills',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,RouterModule,RouterOutlet],
  templateUrl: './bills.component.html',
  styleUrl: './bills.component.css'
})
export class BillsComponent implements OnInit{

  // bills: Bill[] = [];
  // page: number = 0;
  // size: number = 10;
  // totalPages: number=0;
  // filterAmount: number =0;

  bills: any[] = [];

  constructor(private billService: BillsService,private router: Router) { }

  ngOnInit() {
    this.billService.getBills().subscribe(data => {
        this.bills = data;
    });
}


viewBillDetails(billId: number) {
  this.router.navigate(['/layout/bills', billId]); // Navigate to the bill details route
}
  // ngOnInit(): void {
  //   // this.getBills();
  // }

  // getBills(): void {
  //   this.billService.getBills(this.page, this.size).subscribe(data => {
  //     this.bills = data.content;
  //     this.totalPages = data.totalPages;
  //   });
  // }

  // filterBills(): void {
  //   if (this.filterAmount != null) {
  //     this.bills = this.bills.filter(bill => bill.amount >= this.filterAmount);
  //   }
  // }

  // nextPage(): void {
  //   if (this.page < this.totalPages - 1) {
  //     this.page++;
  //     this.getBills();
  //   }
  // }

  // prevPage(): void {
  //   if (this.page > 0) {
  //     this.page--;
  //     this.getBills();
  //   }
  // }

}
