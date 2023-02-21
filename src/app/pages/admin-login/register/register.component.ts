import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import swal from'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  focus;
  focus1;
  focus2;
  constructor( private fb: FormBuilder) {
      
  }
  get name (){
    return this.formUser.get('name');
  }
  get phone (){
    return this.formUser.get('phone');
  }
  get password (){
    return this.formUser.get('password');
  }
  get email (){
    return this.formUser.get('email');
  }
  get repeatPassword (){
    return this.formUser.get('repeatPassword');
  }
  formUser = this.fb.group({
    'name':['',Validators.required],
    'email':['',[Validators.required,Validators.email,Validators.pattern('[A-Z]{1,2}[0-9][0-9A-Z]?\\s?[0-9][A-Z]{2}')]],
    'phone':['',Validators.required],
    'password':['',Validators.required],  
    'repeatPassword':['',Validators.required],
  });

  ngOnInit() {
  
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("bg-blue");
  
  }
  ngOnDestroy() {
    
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("bg-blue");
 
  }
  submit() {
    console.log('me llamaron')
    if (this.formUser.valid) {
      console.log(this.formUser.value)
      swal.fire('Registro exitoso...','' ,'success');
    }
    else{
      alert("FILL ALL FIELDS")
    }
  }

}
