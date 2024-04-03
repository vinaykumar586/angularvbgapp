 import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalStateService } from "../../Service/global-state.service";
import { Subscription } from "rxjs";

 @Component({
    selector:"app-login",
    templateUrl:'./login.component.html',
    styleUrl:'./login.component.css'
 })
 
 export class LoginComponent implements OnInit{
    
    constructor(private router:Router,private globalStateService:GlobalStateService){

    }
    randomNames:object;
    email:string="";
    password:string="";
    userNameRequired:string="";
    randomNamesSubscrption:Subscription;
    @Output() loginStatusChanged = new EventEmitter<boolean>();
  ngOnInit(): void {
    this.globalStateService.userNameRequired$.subscribe(value=>{
        console.log(value)
        this.email=value;
    })
    console.log("===============",this.globalStateService.getRandomNames());
    this.randomNamesSubscrption=this.globalStateService.getRandomNames().subscribe(data=>{
       this.randomNames=data;
    })
    
  }
  ngOnDestroy(): void {
    // Unsubscribe from the subscription to prevent memory leaks
    if (this.randomNamesSubscrption) {
      this.randomNamesSubscrption.unsubscribe();
    }
  }    handleLoginDetails(e:any):void{
        // console.log(this)
        
    }
    handleSubmit():void{
        const{email,password}=this;
        let userDetail=JSON.parse(localStorage.getItem("userDetails"));
        if(userDetail.username===email && userDetail.password==password){
            this.globalStateService.setLoggedIn(true);
            this.globalStateService.setUserDetails(userDetail)
            this.router.navigate(['/'])
        }
    }
 }