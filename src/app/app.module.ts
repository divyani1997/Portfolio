import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { SworkComponent } from './components/swork/swork.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { IndividualBlogComponent } from './components/individual-blog/individual-blog.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    SworkComponent,
    BlogComponent,
    ContactComponent,
    IndividualBlogComponent,
    HeaderComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
