import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WhyUsComponent } from './why-us/why-us.component';

const appRoutes : Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'services', component: ServicesComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  { path: '', redirectTo:'/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    AboutUsComponent,
    ContactUsComponent,
    HeaderComponent,
    FooterComponent,
    WhyUsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy',scrollPositionRestoration: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
