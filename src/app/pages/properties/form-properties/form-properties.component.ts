import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';

import Dropzone from "dropzone";
declare const google: any;
Dropzone.autoDiscover = false;

@Component({
  selector: 'app-form-properties',
  templateUrl: './form-properties.component.html',
  styleUrls: ['./form-properties.component.css']
})
export class FormPropertiesComponent implements OnInit {
  focus;
  focus1;
  dataPropsG!     : FormGroup;
  addressDetails! : FormGroup;
  featuresHouse!  : FormGroup;
  amenitis!       : FormGroup;
  priceProp!      : FormGroup;
  video!          : FormGroup;
  img!            : FormGroup;
  step = 1;
  show            = false;
  hidden          = false;
  personal_step   = false;
  address_step    = false;
  feature_step    = false;
  amenitis_step   = false;
  price_step      = false;
  video_step      = false;
  
  
  priceSold: string = null;
  priceRent: string = null;
  priceRentVacation: string = null;
  
  emptyPrice=false;
  emptyCuS=false;
  emptyCuR=false;
  emptyCuRV=false;


  constructor(private formBuilder: FormBuilder) {
   
   }
  ngOnInit() {
   
   

    this.dataPropsG = this.formBuilder.group({
      typeProp:  ['',Validators.required],  
    });

    this.priceProp = this.formBuilder.group({
      priceRentVacation: '' ,
      priceRent:'', 
      priceSold:'',
      currencySold:'',
      currencyRent:'',
      currencyRentVacation:''
    
    });

    this.addressDetails = this.formBuilder.group({
      direction:            ['',Validators.required],          
      municipality:         ['',Validators.required],
      stateProperties:      ['',Validators.required],
      suburbProperties:     ['',Validators.required],
      cityProperties:       ['',Validators.required]         
    });
    this.featuresHouse = this.formBuilder.group({
      m2C:                  '',
      m2T:                  ['',Validators.required], 
      sqf:                  '', 
      bath:                 '' ,  
      room:                 '', 
      garage:               ''  
    });
    this.amenitis = this.formBuilder.group({
      ameInt:               ['',Validators.required],  
      ameExt:               ['',Validators.required],
      light:                '',
      water :               '',
      internet:             '',
      solarsPanels:         '',
      gas:                  '',
      telephone:            '',
      ac:                   '',
      garage:''
    });

    this.video  = this.formBuilder.group({
      youtube:'',
      virtualUrl:''
    }); 
    this.img  = this.formBuilder.group({

    });
    // this.educationalDetails = this.formBuilder.group({
    //     highest_qualification: ['', Validators.required],
    //     university: ['', Validators.required],
    //     total_marks: ['',Validators.required]
    // });
   
   
  }
  get personal(){ return this.dataPropsG.controls; }
  get price()   { return this.priceProp.controls;}; 
  get feature() { return this.featuresHouse.controls; }
  get address() { return this.addressDetails.controls; }
  get ameniti() { return this.amenitis.controls; }

  next(){
    if(this.step == 1){
      this.personal_step = true;
      if (this.dataPropsG.invalid) { return  }
        this.step++                   
          
    }

    if(this.step==2){
      this.emptyPrice=false;
        this.price_step = true;
        if (this.priceProp.invalid) { return }

        if(this.priceProp.value.priceSold  == '' && this.priceProp.value.priceRent == '' && this.priceProp.value.priceRentVacation == '') {       
          this.emptyPrice=true;       
        }else{
          if(this.priceProp.value.priceSold  && this.priceProp.value.currencySold ==''){
            this.emptyCuS = true;
          }else{
            this.emptyCuS = false;
          }
          if(this.priceProp.value.priceRent && this.priceProp.value.currencyRent ==''){
            this.emptyCuR = true;
          }else{
            this.emptyCuR = false;
          }
          if(this.priceProp.value.priceRentVacation && this.priceProp.value.currencyRentVacation ==''){
            this.emptyCuRV = true;
          }else{
            this.emptyCuRV = false;
          }
          this.emptyPrice=false;
      
          if( !this.emptyPrice && ! this.emptyCuS && !this.emptyCuR && !this.emptyCuRV){
            this.step++
            setTimeout(() => {
              this.maps();
            }, 100);
          }
          
        }  
         

    }
  
    if(this.step==3){
     
      this.address_step = true;
      if (this.addressDetails.invalid) { return }
          this.step++;
    }
    if(this.step==4){
     
      this.feature_step = true;
      if (this.featuresHouse.invalid) { return }
          this.step++;
    }
    if(this.step==5){
      this.amenitis_step = true;
      if (this.amenitis.invalid) { return }
          this.step++;
          
    }
    if(this.step==6){
      this.video_step = true;
    }
  
  }
  previous(){
   
    this.step--
    if(this.step==1){
      this.personal_step = false;
    }
    if(this.step==2){
      this.feature_step = false;
    }
  }
  submit(){
    // if(this.step==3){
    //   this.feature_step = true;
    //   if (this.featuresHouse.invalid) { return }
    // }

    this.show=true;
    this.step++;
    this.hidden=true;
    setTimeout(()=>{
      this.image();
    },100);
  }
  fadeOut(fadeOut,fade){
    document.getElementById(fadeOut).classList.add('visually-hidden');
    document.getElementById(fade).classList.remove('visually-hidden');    
    
  }
  
  maps(){
    var map = document.getElementById("map-custom");
    var lat = map.getAttribute("data-lat");
    var lng = map.getAttribute("data-lng");

    var myLatlng = new google.maps.LatLng(lat, lng);
    var mapOptions = {
      zoom: 12,
      scrollwheel: false,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [{ color: "#444444" }]
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [{ color: "#f2f2f2" }]
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: [{ visibility: "off" }]
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: [{ saturation: -100 }, { lightness: 45 }]
        },
        {
          featureType: "road.highway",
          elementType: "all",
          stylers: [{ visibility: "simplified" }]
        },
        {
          featureType: "road.arterial",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }]
        },
        {
          featureType: "transit",
          elementType: "all",
          stylers: [{ visibility: "off" }]
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [{ color: "#5e72e4" }, { visibility: "on" }]
        }
      ]
    };

    map = new google.maps.Map(map, mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Hello World!"
    });

    var contentString =
      '<div class="info-window-content"><h2>Argon Dashboard</h2>' +
      "<p>A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</p></div>";

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    google.maps.event.addListener(marker, "click", function() {
      infowindow.open(map, marker);
    });
  }

  image(){
     let currentMultipleFile = undefined;
    // multiple dropzone file - accepts any type of file
    new Dropzone(document.getElementsByClassName("dropzone-multiple")[0], {
      url: "https://",
      thumbnailWidth: null,
      thumbnailHeight: null,
      previewsContainer: document.getElementsByClassName(
        "dz-preview-multiple"
      )[0],
      previewTemplate: document.getElementsByClassName("dz-preview-multiple")[0]
        .innerHTML,
      maxFiles: null,
      acceptedFiles: null,
      init: function() {
        this.on("addedfile", function(file) {
          if (currentMultipleFile) {
          }
          currentMultipleFile = file;
        });
      }
    });
    document.getElementsByClassName("dz-preview-multiple")[0].innerHTML = "";
    this.dataPropsG = this.formBuilder.group({
      typeProp:             ['', Validators.required],    
    
    });
  }
    
  
  
   
}
