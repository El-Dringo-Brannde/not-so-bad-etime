
// Core Modules
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TimePunchComponent } from './time-punch/time-punch.component';
import { CONST_ROUTING } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { CookieModule } from 'ngx-cookie';

// Angular Material
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';


@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      TimePunchComponent,
      HeaderComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpClientModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      CookieModule.forRoot(),
      CONST_ROUTING
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
