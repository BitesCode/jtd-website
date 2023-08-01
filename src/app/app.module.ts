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
import { BrandSliderComponent } from './components/shared/brand-slider/brand-slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesTitleComponent } from './components/shared/pages-title/pages-title.component';
import { HttpClient,HttpClientModule  } from '@angular/common/http';
import { WorkDetailsComponent } from './components/pages/work-details/work-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    BannerComponent,
    ContactFormComponent,
    AccordianComponent,
    BrandSliderComponent,
    PagesTitleComponent,
    WorkDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TypingAnimatorModule,
    AccordionModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
