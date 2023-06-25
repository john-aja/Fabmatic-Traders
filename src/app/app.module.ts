import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { WhyUsSectionComponent } from './why-us-section/why-us-section.component';
import { WhatWeDoSectionComponent } from './what-we-do-section/what-we-do-section.component';
import { OurProductsSectionComponent } from './our-products-section/our-products-section.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutSectionComponent,
    WhyUsSectionComponent,
    WhatWeDoSectionComponent,
    OurProductsSectionComponent,
    WhyChooseUsComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
