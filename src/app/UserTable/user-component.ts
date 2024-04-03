import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { GlobalStateService } from "../../Service/global-state.service";

@Component({
    selector:"user-info",
    templateUrl:"./user-component.html"
})
export class UserInfo implements OnInit{
   userDetails:any=null;
   count:number=0;
   @Input() receivedData: string; 
   @Output() handleUpdateInputTest=new EventEmitter<string>()
       constructor(private globalStateService:GlobalStateService){
        console.log(this.receivedData)

    }
    
    handleNameClick(){
        this.count=this.count+1;
        this.handleUpdateInputTest.emit(`clicked ${this.count+1}`)
    }
    ngOnInit(): void {
        this.globalStateService.userDetails$.subscribe(userDetails=>{
            this.userDetails=userDetails;
        })
        console.clear();
        console.log(this.receivedData)

    }
    ngOnDestroy(): void {
        // Cleanup tasks before component destruction
        console.clear();
      console.log("destroy")
      }
}