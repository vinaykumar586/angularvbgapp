import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Header/header.component';
import { GlobalStateService } from '../Service/global-state.service';
import { UserInfo } from './UserTable/user-component';
import { UpperCasePipe } from './pipes/uppercase.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    UserInfo,
  ],
  imports: [
    BrowserModule,FormsModule,AppRoutingModule,HttpClientModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [GlobalStateService,    UpperCasePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
