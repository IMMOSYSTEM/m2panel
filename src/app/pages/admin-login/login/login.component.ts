import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import swal from'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  focus;
  focus1;

  constructor( private fb: FormBuilder) {
      
  }
  get email (){
    return this.formUser.get('email');
  }
  get password (){
    return this.formUser.get('password');
  }
  formUser = this.fb.group({
    'email':['',[Validators.required,Validators.email]],
    'password':['',Validators.required]
  });


  ngOnInit() {
  
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("bg-blue");
  
  }
  ngOnDestroy() {
    
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("bg-blue");
 
  }

}
