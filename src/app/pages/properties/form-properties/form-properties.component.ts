import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-properties',
  templateUrl: './form-properties.component.html',
  styleUrls: ['./form-properties.component.css']
})
export class FormPropertiesComponent implements OnInit {

  dataPropsG!: FormGroup;
  addressDetails!: FormGroup;
  educationalDetails!: FormGroup;
  personal_step = false;
  address_step = false;
  education_step = false;
  step = 1;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
        this.dataPropsG = this.formBuilder.group({
          typeProp:             ['', Validators.required],
          nameProperties:       ['', Validators.required],
          direction:            ['', Validators.required],
          keywordProperties:    ['',Validators.required],
          countryProperties:    ['',Validators.required],
          stateProperties:      ['',Validators.required],
          suburbProperties:     ['',Validators.required],
          cityProperties:       ['',Validators.required],
          priceSold:            ['',Validators.required],
          priceRent:            ['',Validators.required],
          priceRentVacation:    ['',Validators.required],
          currencySold:         ['',Validators.required],
          currencyRent:         ['',Validators.required],
          currencyRentVacation: ['',Validators.required]
        });
        this.addressDetails = this.formBuilder.group({
            city: ['', Validators.required],
            address: ['', Validators.required],
            pincode: ['',Validators.required]
        });
        this.educationalDetails = this.formBuilder.group({
            highest_qualification: ['', Validators.required],
            university: ['', Validators.required],
            total_marks: ['',Validators.required]
        });
  }
  get personal() { return this.dataPropsG.controls; }
  get education() { return this.educationalDetails.controls; }
  get address() { return this.addressDetails.controls; }
  next(){
    if(this.step==1){
          this.personal_step = true;
          if (this.dataPropsG.invalid) { return  }
          this.step++
    }
    if(this.step==2){
        this.address_step = true;
        if (this.addressDetails.invalid) { return }
            this.step++;
    }
  }
  previous(){
    this.step--
    if(this.step==1){
      this.personal_step = false;
    }
    if(this.step==2){
      this.education_step = false;
    }
  }
  submit(){
    if(this.step==3){
      this.education_step = true;
      if (this.educationalDetails.invalid) { return }
    }
  }

}
