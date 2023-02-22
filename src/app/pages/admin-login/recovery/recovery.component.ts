import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import swal from'sweetalert2';
@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss']
})
export class RecoveryComponent implements OnInit {
  focus;
  focus1;
  constructor(private fb: FormBuilder, private route: ActivatedRoute) { }

  get password (){
    return this.formUser.get('password');
  }

  get repeatPassword (){
    return this.formUser.get('repeatPassword');
  }
  formUser = this.fb.group({
    'password':['',[Validators.required,Validators.minLength(6)]],
    'repeatPassword':['',[Validators.required,Validators.minLength(6)]] 

  });
  hiddenB=false;
  submit() {
    console.log('me llamaron')
    if (this.formUser.valid) {
      console.log(this.formUser.value)
      this.hiddenB=true;
      swal.fire('Cambio Exitoso','' ,'success');
    }
    else{
      alert("FILL ALL FIELDS")
    }
  }
  ngOnInit() {
    this.route.queryParams.subscribe( p =>{
      console.log(p.t);
    });
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("bg-blue");
  
  }
  ngOnDestroy() {
    
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("bg-blue");
 
  }
  hidden=false;
  validatePassword() {
    this.hidden=true;
        
    if( this.password.value === this.repeatPassword.value){
     
      this.hidden=false;
    }
  }  
 

}
