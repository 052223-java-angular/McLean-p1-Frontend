import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ConstellationComponent } from './pages/constellation/constellation.component';
import { GeolocationComponent } from './pages/geolocation/geolocation.component';
import { SkyConditionComponent } from './pages/sky-condition/sky-condition.component';
import { ViewSavedDateComponent } from './pages/view-saved-date/view-saved-date.component';
import { HarmonicMappingComponent } from './pages/harmonic-mapping/harmonic-mapping.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'constellation', component: ConstellationComponent},
  {path: 'geolocation', component: GeolocationComponent},
  {path: 'sky-condition', component: SkyConditionComponent },
  {path: 'view-saved-date', component: ViewSavedDateComponent },
  {path: 'harmonic-mapping', component: HarmonicMappingComponent },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
