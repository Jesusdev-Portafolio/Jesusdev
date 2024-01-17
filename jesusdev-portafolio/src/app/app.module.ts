import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { ContactComponent } from './components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwitcherComponent } from './shared/switcher/switcher.component'
import { NgxTypedJsModule } from 'node_modules/ngx-typed-js';
import { HeaderComponent } from './core/header/header.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component'
import { SideBarItemComponent } from './components/side-bar-item/side-bar-item.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    AboutComponent,
    ProjectsComponent,
    CertificatesComponent,
    ContactComponent,
    SwitcherComponent,
    HeaderComponent,
    NavBarComponent,
    SideBarItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxTypedJsModule,
    HttpClientModule,
    TranslocoRootModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
