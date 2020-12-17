import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: FormGroup;
  // postResponse: any ='';
  // submitted = false;

  

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
   }

  ngOnInit(): void {
    console.log(this.form);    
  }

  createForm(){
    this.form = this.formBuilder.group({
      heroe: ['', [Validators.required]],
      aparicion: ['', [Validators.required]],
      bio: ['', [Validators.required]],
      casa: ['', [Validators.required]]
    })
  }

}
