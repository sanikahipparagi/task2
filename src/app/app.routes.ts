import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { BillsComponent } from './bills/bills.component';
import { PaymentmethodComponent } from './paymentmethod/paymentmethod.component';
import { BilldetailsComponent } from './billdetails/billdetails.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentconfirmationComponent } from './paymentconfirmation/paymentconfirmation.component';
import { PaymenthistoryComponent } from './paymenthistory/paymenthistory.component';
import { CashPaymentComponent } from './paymentmethod/cash-payment/cash-payment.component';

export const routes: Routes = [
    {path:'register',component:RegisterComponent},
  { path: 'login', component: LoginComponent },
  {path:'layout',component:LayoutComponent,
     children:[
      {path:'dashboard',component:DashboardComponent},
      {path:'bills',component:BillsComponent},
      {path:'paymentMethod',component:PaymentmethodComponent},
      { path: 'payment', component: PaymentComponent },
      {path:'paymentConfirmation',component:PaymentconfirmationComponent},
      {path:'paymentHistory',component:PaymenthistoryComponent},
      {path:'cashPayment',component:CashPaymentComponent},
      { path: 'bills/:id', component: BilldetailsComponent }
     ]
  },
  { path: '', redirectTo: '/register', pathMatch: 'full' }
];
