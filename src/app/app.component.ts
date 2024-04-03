import { Component, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';
import { HeaderComponent } from './Header/header.component';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent implements OnInit {
  title:string="first-app"
  parentData="logined"
   counterInteval:any;

  intervalObserver= new Observable<number>(subscriber=>{
    let counter=1;
  this.counterInteval=setInterval(()=>{
      console.log("subscriber")
      subscriber.next(counter++)
    },1000)
    return()=>{
      clearInterval(this.counterInteval);

    }
  })

  observeableTest=new Observable<string>(subscriber=>{
    subscriber.next("vinay");
    setTimeout(()=>subscriber.next("charan"),3000);
    setTimeout(()=>subscriber.error(new Error("Failure")),4000)
    subscriber.complete();
    return ()=>{
      console.log("Tear Down")
    }
  })
  subscription:Subscription;
  subscription1:Subscription;
  intervaslSubscription:Subscription;
  timeOut:number;
 
  constructor(){
    
    let data: string
    console.log(this)
    localStorage.setItem("userDetails",JSON.stringify({username:"vinay",password:'1234'}))
  }
  observer={
    next: (value:string)=>console.log(value),
    error: (err:any)=>console.log(err.message)
  }

  ngOnInit(): void {
    this.intervaslSubscription=this.intervalObserver.subscribe({
      next:value=>console.log(value)
    })
    setTimeout(()=>{
      this.intervaslSubscription.unsubscribe();
      clearInterval(this.counterInteval);
    },1000);
    this.subscription=this.observeableTest.subscribe(this.observer.next);
    console.log("first one")
  setTimeout(() => {
    console.log("second one");
    this.subscription1=  this.observeableTest.subscribe({
        next: value=>console.log(value),
        error:err=>console.log(err.message),
        complete:()=>console.log("complted")
      });
    }, 1000);
        console.log(this.subscription,"==================")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called");
    console.log(changes); // Log the changes object to see what properties changed
  }
  ngOnDestroy():void{
    // this.observeableTest.
    this.subscription.unsubscribe();
  }
handleUpdateParentData(data:string):void{
  this.parentData=data
}

}
