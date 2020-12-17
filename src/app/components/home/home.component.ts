import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: FormGroup;
  postResponse: any ='';
  submitted = false;

  constructor(private formBuilder: FormBuilder, private heroesMongo: HeroesService) {
    this.createForm();
  }
  
  ngOnInit(): void {
    console.log(this.form);    
  }

  createForm(){
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      aparicion: ['', [Validators.required]],
      bio: ['', [Validators.required]],
      casa: ['', [Validators.required]]
    })
  }

  enviar(){
    console.log(this.form);
    if (this.form.invalid) {
      return Object.values( this.form.controls ).forEach( control => {
        control.markAsTouched();
        this.submitted = false;
        console.log('Datos incorrectos');
        
      } );
    }else{
      const data = {
        'nombre': this.form.get('nombre').value,
        'aparicion': this.form.get('aparicion').value,
        'bio': this.form.get('bio').value,
        'casa': this.form.get('casa').value
      };
      this.heroesMongo.addHeroe(data).subscribe((data: any) => {
        this.postResponse = data;
        console.log(this.postResponse);
        this.submitted = true;
      });
    }
  }

}
