import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/common/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  contact: Contact;
  successMessage!: string;
  errorMessage!: string;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) {
    this.contact = new Contact();
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.contact = this.contactForm.value;
    this.contactService.addContact(this.contact).subscribe(
      (response) => {
        console.log(response);
        this.contactForm.reset();
        this.successMessage = 'Your message has been sent successfully!';
        this.errorMessage = '';
      },
      (error) => {
        console.error(error);
        this.errorMessage = 'An error occurred while sending your message. Please try again.';
        this.successMessage = '';
      }
    );
  }
  
}
