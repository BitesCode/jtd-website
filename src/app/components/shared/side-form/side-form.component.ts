import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-side-form',
  templateUrl: './side-form.component.html',
  styleUrls: ['./side-form.component.css']
})
export class SideFormComponent {
  
  // quoteForm: any;

  quoteForm: FormGroup = this.formBuilder.group({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    contactNo: new FormControl('', [Validators.required]),
  })

  constructor(private formBuilder: FormBuilder) {
    // this.quoteForm = this.formBuilder.group({
    //   name: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   contactNo: ['', Validators.required],
    //   services: ['', Validators.required]
    // });
  }

  onSubmit() {
      console.log(this.quoteForm.value); 

  }
}
