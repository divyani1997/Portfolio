import { NgModule } from '@angular/core';
import { IndividualBlogComponent } from './components/individual-blog/individual-blog.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { SworkComponent } from './components/swork/swork.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  {path : 'individual', component : IndividualBlogComponent},
  {path : '', redirectTo:'/home', pathMatch: 'full'},
  {path : 'home', component : HomeComponent},
  {path : 'about', component:AboutComponent},
  {path : 'services', component:ServicesComponent},
  {path : 'work', component:SworkComponent},
  {path: 'blog', component:BlogComponent},
  {path : 'contact', component : ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
