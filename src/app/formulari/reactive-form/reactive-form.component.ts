import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  formGuapo!: FormGroup;
  constructor(private formsBuider: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(){
   
    const name = 'Pon Tu Nombre';
    this.formGuapo=this.formsBuider.group({

      
      name: ['',Validators.required],
      email: ['',Validators.required],
      password: ['', Validators.required],
      birthday:['',Validators.required],
      surname:['',this.validateApellido],
      telefon:['',Validators.required],
      confirmPassword:['',Validators.required]

    });
  }
   get nameValid(){
    return this.formGuapo.get('name');
   }

   get emailValid(){
    return this.formGuapo.get('email');
   }

   get passwordValid(){
    return this.formGuapo.get('password');
   }

   get birthdayValid(){
    return this.formGuapo.get('birthday');
   }

   get surnameValid(){
    return this.formGuapo.get('surname');
   }

   get telefonValid(){
    return this.formGuapo.get('telefon');
   }
   get confirmPasswordValid(){
    return this.formGuapo.get('confirmPassword');
   }

  private validateApellido(control: AbstractControl){
    var apellido=control.value;
    var error=null;
    if (!apellido.includes("Perez")) {
      error="El apellido debe incluir Perez";
    }
    return error;
  }

  
}
