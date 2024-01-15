import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { SideBarComponent } from './core/side-bar/side-bar.component';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { ContactComponent } from './components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwitcherComponent } from './shared/switcher/switcher.component'
import { NgxTypedJsModule } from 'node_modules/ngx-typed-js'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    SideBarComponent,
    MainComponent,
    AboutComponent,
    ProjectsComponent,
    CertificatesComponent,
    ContactComponent,
    SwitcherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxTypedJsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
