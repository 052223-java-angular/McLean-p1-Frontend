import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthInterceptorService } from './services/auth-interceptor-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GeolocationComponent } from './pages/geolocation/geolocation.component';
import { ConstellationComponent } from './pages/constellation/constellation.component';
import { SkyConditionComponent } from './pages/sky-condition/sky-condition.component';
import { ViewSavedDateComponent } from './pages/view-saved-date/view-saved-date.component';
import { HarmonicMappingComponent } from './pages/harmonic-mapping/harmonic-mapping.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RightbarComponent } from './components/rightbar/rightbar.component';
import { EditcommentComponent } from './components/rightbar/editcomment/editcomment.component';


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
    ViewSavedDateComponent,
    HarmonicMappingComponent,
    RightbarComponent,
    EditcommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
  ],
  providers: [HttpClient, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
