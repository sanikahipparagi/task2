import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,RouterModule,RouterOutlet,FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phoneNumber: string = '';
  address: string = '';

  firstNameError: string = '';
  lastNameError: string = '';
  emailError: string = '';
  phoneNumberError: string = '';
  addressError: string = '';


  // This method is triggered when the form is submitted
  onSubmit(signupForm: any): void {
    if (signupForm.invalid) {
      this.validateForm(signupForm);
      return;
    }

    // If the form is valid, proceed with the form submission logic
    console.log('Form submitted successfully!');
  }

  // Validate form inputs and display errors
  validateForm(signupForm: any): void {
    const controls = signupForm.controls;

    // Check firstName validation
    if (controls.firstName.touched && controls.firstName.invalid) {
      this.firstNameError = 'First Name is required.';
    } else {
      this.firstNameError = '';
    }

    // Check lastName validation
    if (controls.lastName.touched && controls.lastName.invalid) {
      this.lastNameError = 'Last Name is required.';
    } else {
      this.lastNameError = '';
    }

    // Check email validation
    if (controls.email.touched && controls.email.invalid) {
      if (controls.email.errors.required) {
        this.emailError = 'Email is required.';
      } else if (controls.email.errors.email) {
        this.emailError = 'Please enter a valid email address.';
      }
    } else {
      this.emailError = '';
    }

    if (controls.phoneNumber.touched && controls.phoneNumber.invalid) {
      this.phoneNumberError = 'Phone Number is required.';
    } else {
      this.phoneNumberError = '';
    }

    // Check address validation
    if (controls.address.touched && controls.address.invalid) {
      this.addressError = 'Address is required.';
    } else {
      this.addressError = '';
    }

    // This will also set the touched state for all controls if the user clicks Sign Up directly
    signupForm.form.markAllAsTouched();
  }
  clearErrors() {
    this.firstNameError = '';
    this.lastNameError = '';
    this.emailError = '';
    this.phoneNumberError = '';
    this.addressError = '';
  }

}
