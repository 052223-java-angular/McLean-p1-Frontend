import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'McLean-p1-Frontend';

  constructor(
    private activatedRoute: ActivatedRoute,
    public authService: AuthService
  ) {}

  shouldRenderSidebar(): boolean {
    const currentRoute = this.activatedRoute;
    return currentRoute.snapshot.firstChild?.routeConfig?.path === 'sky-condition';
  }

}
