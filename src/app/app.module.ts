import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GeolocationComponent } from './pages/geolocation/geolocation.component';
import { ConstellationComponent } from './pages/constellation/constellation.component';
import { SkyConditionComponent } from './pages/sky-condition/sky-condition.component';
import { ViewSavedDateComponent } from './pages/view-saved-date/view-saved-date.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    SidebarComponent,
    ConstellationComponent,
    GeolocationComponent,
    SkyConditionComponent,
    ViewSavedDateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
