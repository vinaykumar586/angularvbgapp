import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";


@Injectable({
    providedIn:"root"
})
export class GlobalStateService{
    private isLoggedSubject= new BehaviorSubject<boolean>(false);
    private userNameSubject=new BehaviorSubject<string>("vinay")
    isLoggedIn$:Observable<boolean>=this.isLoggedSubject.asObservable();
    userNameRequired$:Observable<string>=this.userNameSubject.asObservable();
    private userDetailsSubject=new BehaviorSubject<Object>({});
    userDetails$:Observable<Object>=this.userDetailsSubject.asObservable();
    constructor(private http:HttpClient){

    }
    setLoggedIn(status:boolean):void{
        this.isLoggedSubject.next(status)
    }

    setUserDetails(details:object):void{
        this.userDetailsSubject.next(details);
    }
      getRandomNames(){
        return this.http.get("https://random-data-api.com/api/name/random_name");
    }
}