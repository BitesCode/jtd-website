import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { WorksComponent } from './pages/works/works.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'works', component: WorksComponent },
  { path: 'service', component: ServicesComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [     
  HomepageComponent,
   WorksComponent,
   ServicesComponent,
   AboutUsComponent,
   ContactUsComponent
  ]