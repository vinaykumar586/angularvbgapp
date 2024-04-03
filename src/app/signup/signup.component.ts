import { Component } from "@angular/core";
import { UpperCasePipe } from "../pipes/uppercase.component";

@Component({
    selector:"app-signup",
    templateUrl:"./signup.component.html",
    styleUrl:"./signup.component.css"
})
export class SignupComponent{
    username:string="";
    email:string="";
    password:string="";
    errorValue:string="";
    errorName:string="";
constructor(private upperCase:UpperCasePipe){

}
    handleChange(event:any):void{
        this.errorValue="";
        this.errorName="";        
        this.username= this.upperCase.transform(event);
        
    }
    handleSubmit():void{
        this.errorValue="";
        this.errorName=""
        if(this.username.length<3){
            this.errorValue="username should be not empty and greater three letter";
            this.errorName="username";
            console.log(this)
        }
    }
}