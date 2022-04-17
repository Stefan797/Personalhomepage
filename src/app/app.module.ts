import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { SuccessmailsiteComponent } from './successmailsite/successmailsite.component';
import { FooterNotMainpageComponent } from './footer-not-mainpage/footer-not-mainpage.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HomeComponent,
    HeaderComponent,
    ProjectsComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    ImprintComponent,
    DataProtectionComponent,
    SuccessmailsiteComponent,
    FooterNotMainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
