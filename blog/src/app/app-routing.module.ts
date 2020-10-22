import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import blog page
import { BlogPageComponent } from './blog-page/blog-page.component';
//import blog details
import { BlogPageDetailsComponent } from './blog-page-details/blog-page-details.component';
// import about page
import { AboutComponent } from './about/about.component';
//import contact page
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: "", component: BlogPageComponent
  },{
    path: 'POI/:POIID', component: BlogPageDetailsComponent
  },{
    path: "about", component: AboutComponent 
  },{
    path: "contact", component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
