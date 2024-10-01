import { Component, OnInit } from '@angular/core';
import { Bill } from '../bills/bills.model';
import { BillsService } from '../bills/bills.service';
import { ActivatedRoute, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-billdetails',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule,RouterOutlet,RouterLink],
  templateUrl: './billdetails.component.html',
  styleUrl: './billdetails.component.css'
})
export class BilldetailsComponent implements OnInit {

  billId!: number;  // Store the ID of the bill
  bill: Bill | null = null;  // Store the details of the bill

  constructor(
    private route: ActivatedRoute,  // Get route parameters
    private billService: BillsService  // Service to fetch bill data
  ) {}

  ngOnInit(): void {
    // Get the billId from the route parameters
    this.route.paramMap.subscribe(params => {
      this.billId = +params.get('id')!;
      this.getBillDetails();
    });
  }

  // Fetch the bill details from the service
  // getBillDetails(): void {
  //   this.billService.getBillById(this.billId).subscribe(data => {
  //     this.bill = data;
  //   });
  // }

  getBillDetails(): void {
    this.billService.getBillById(this.billId).subscribe(data => {
      if (data) {
        this.bill = data;
      } else {
        // Handle case where no bill was found
        console.error('No bill found with ID:', this.billId);
      }
    });
  }
}
