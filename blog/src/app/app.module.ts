import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogPageDetailsComponent } from './blog-page-details/blog-page-details.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

// import forms
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlogPageComponent,
    BlogPageDetailsComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
