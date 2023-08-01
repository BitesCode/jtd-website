import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  showMsg: boolean = false;

  form: FormGroup = this.fb.group({
    from_name: 'join the dots',
    to_name: 'Admin',
    your_name: new FormControl('', Validators.required),
    your_email: new FormControl('', [Validators.required, Validators.email]),
    your_service: new FormControl('', [Validators.required]),
  })


  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  }


  async onSubmit() {
    emailjs.init('DSuxVfqQ39dPmzp_C');
    let response = await emailjs.send("service_9h28arp", "template_obgbmta", {
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      your_name: this.form.value.your_name,
      your_email: this.form.value.your_email,
      your_service: this.form.value.your_service,
    });
    this.showMsg= true;
    this.form.reset();

  }



}
