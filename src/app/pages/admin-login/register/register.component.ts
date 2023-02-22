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
    'email':['',[Validators.required,Validators.email]],
    'phone':['',[Validators.required,  Validators.maxLength(14)]],
    'password':['',[Validators.required,Validators.minLength(6)]],  
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
  hiddenB=false;
  submit() {
 
    if (this.formUser.valid) {
      this.hiddenB=true;
      swal.fire('Registro exitoso...','' ,'success');
    }
    else{
      alert("FILL ALL FIELDS")
    }
  }

  validateFormat(event) {
    let key;
    if (event.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
    } else {
      key = event.keyCode;
      key = String.fromCharCode(key);
    }
    const regex = /[0-9]|\./;
     if (!regex.test(key)) {
      event.returnValue = false;
       if (event.preventDefault) {
        event.preventDefault();
       }
     }
    }
    hidden=false;
    validatePassword() {
      this.hidden=true;
          
      if( this.password.value === this.repeatPassword.value){
       
        this.hidden=false;
      }
    }  
    

}
