import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHomeComponent } from './home/page-home/page-home.component';
import { SectionVideointroComponent } from './home/section-videointro/section-videointro.component';
import { SectionLiveComponent } from './home/section-live/section-live.component';
import { SectionAccordionComponent } from './home/section-accordion/section-accordion.component';
import { PageAboutComponent } from './about/page-about/page-about.component';
import { NavbarAboutComponent } from './about/navbar-about/navbar-about.component';
import { PageContactComponent } from './contact/page-contact/page-contact.component';
import { NavbarContactComponent } from './contact/navbar-contact/navbar-contact.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PageGalleryComponent } from './gallery/page-gallery/page-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    SectionVideointroComponent,
    SectionLiveComponent,
    SectionAccordionComponent,
    PageAboutComponent,
    NavbarAboutComponent,
    PageContactComponent,
    NavbarContactComponent,
    FooterComponent,
    NavbarComponent,
    PageGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
