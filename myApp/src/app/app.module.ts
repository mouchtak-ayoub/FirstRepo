import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SignupComponent } from './signup/signup.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HeaderComponent } from './home/header/header.component';
import { HomeModule } from './home/home.module';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    HomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


