import { NgModule } from "@angular/core";
import {Routes,RouterModule} from '@angular/router'
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { AppComponent } from "./app.component";

const routes:Routes=[
{
    path:"signup",component:SignupComponent
},{
    path:"login",component:LoginComponent
}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})






export class AppRoutingModule{}