import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, OnInit, Output, SimpleChanges, } from "@angular/core";
import { GlobalStateService } from "../../Service/global-state.service";
import { Observable, from, of } from "rxjs";


@Component({
    selector:"app-header",
    templateUrl:"./header.component.html",
    styleUrl:"./header.component.css",
})

export class HeaderComponent implements OnInit{
    isLoggedIn: boolean = false;
    showProfile:boolean=false;
    inputTesting:string="vinaykumar";
    somePromise:Promise<any>;
    @Input() parentData:string;
    @Output() handleUpdateParentData= new EventEmitter<string>();
    constructor(private globalStateService: GlobalStateService){
    }
    ofObservable=new Observable<string>(subscriber=>{
        subscriber.next("vinaycharansrinu")
        subscriber.complete();
        return()=>{
          console.log("completed")
        }
    }

    )
    data(...args:string[]):Observable<string>{
    return new Observable<string>(subscriber=>{
     for(let i=0;i<args.length;i++){
        subscriber.next(args[i])
     }
    })
   }
    
  ngOnInit(): void {
    this.somePromise=new Promise((resolve,reject)=>{
    if(true){
        resolve("From Reoslved")
    }else{
        reject("From Rejected")
    }
    })
    const observablePromise=from(this.somePromise);
    observablePromise.subscribe({
        next:value=>console.log(value),
        complete:()=>console.log("fromcompltede")

    })
    this.data("here","vilan","heroine").subscribe({
        next:value=>console.log(value)
    })
    from(["from1","from2","from3"]).subscribe({
        next:value=>console.log(value),
        complete:()=>console.log("fromcompltede")

    })
    of("vinay","charan","srinu").subscribe({
        next:value=>console.log("value",value),
        complete:()=>console.log("compltede")
    })
    this.ofObservable.subscribe({
        next:value=>console.log(value),
        complete:()=>console.log("completed"),
        
       
    })
   let homeIcon=document.querySelector(".home");
   console.log("home",homeIcon)

   let homeText=new Observable<MouseEvent>(subscriber=>{
    homeIcon.addEventListener("click",(event:any)=>{
        subscriber.next(event)
    })
  

    })
    homeText.subscribe(event=>{
        console.log(event.type,"sub1")
    })
    setTimeout(()=>{
        console.log("subscription 2 starts")
        homeText.subscribe(event=>{
            console.log(event.type,"sub2")
        }) 
    },4000)
    // Subscribe to the isLoggedIn$ observable to receive updates
    this.globalStateService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
      this.parentData="testd"
    });
}

setShowProfile():void{
this.showProfile=true;
}
hideProfile():void{
    this.showProfile=false;
}
// ngOnChanges(changes: SimpleChanges): void {
//     console.log("ngOnChanges called");
//     console.log(changes); // Log the changes object to see what properties changed
//   }

//   ngDoCheck(): void { //every input chnage called
//     console.log('ngDoCheck hook triggered');
//     // Perform custom change detection logic or reactions to state changes here
//   }
//   ngAfterViewInit(): void {
//     // Accessing DOM elements or performing other initialization tasks
//     console.log('ngAfterViewInit hook triggered');
//     console.log('Element reference:', this.isLoggedIn,this.showProfile);
//   }
//   ngAfterContentInit(): void {
//     // Accessing projected content or performing other initialization tasks
//     console.log('ngAfterContentInit hook triggered');
//     console.log('Element reference:', this.isLoggedIn,this.showProfile);
//   }
//   ngAfterViewChecked(): void { //every input chnage called
//     // Perform additional actions or logic after the view has been checked
//     console.log('ngAfterViewChecked hook triggered');
//   }
//   ngAfterContentChecked(): void {
//     // Perform additional actions or logic after the content has been checked
//     console.log('ngAfterContentChecked hook triggered');
//   }
  ngOnDestroy(): void {
    // Cleanup tasks before component destruction
  console.log("destroy")
  }

    handleLoginStatusChanged(status: boolean): void {
        console.log(status)
        this.isLoggedIn = status;
    }
    handleLogout():void{
        this.isLoggedIn=false;
       this.handleUpdateParentData.emit("logout successfully")
    }
    handleUpdateInputTest(input:string):void{
    this.inputTesting=input;
    }
}