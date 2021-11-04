import { Component} from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  constructor( private fb: FormBuilder ) {}
  
  form = this.fb.group({
    name: ["", Validators.required],
    email:["", [Validators.required, Validators.email]],
    contact: ["", Validators.pattern("^([0|\+[0-9]{1,})[-\s]?([0-9]{1,14})$")],
    message: ["", Validators.minLength(5)]
  });

  onSubmit() {
    window.open(
      `mailto:rishabhsharma31081997@gmail.com
      ?subject=${this.form.value.name} wants to connect with you
      &body=Email: ${this.form.value.email}
            Contact: ${this.form.value.contact}
            Message: ${this.form.value.message}`
    );
  }

}
