import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss']
})
export class RecoveryComponent implements OnInit {
  focus;
  focus1;
  constructor(private fb: FormBuilder) { }

  get password (){
    return this.formUser.get('password');
  }

  get repeatPassword (){
    return this.formUser.get('password');
  }
  formUser = this.fb.group({
    'password':['',Validators.required],
    'repeatPassword':['',Validators.required] 

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
