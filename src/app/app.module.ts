import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HeaderComponent} from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { BannerComponent } from './components/shared/banner/banner.component';
import { ContactFormComponent } from './components/shared/contact-form/contact-form.component'
import { TypingAnimatorModule } from 'angular-typing-animator';
import { AccordianComponent } from './components/shared/accordian/accordian.component'
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    BannerComponent,
    ContactFormComponent,
    AccordianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TypingAnimatorModule,
    AccordionModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
