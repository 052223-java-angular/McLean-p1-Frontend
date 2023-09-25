import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'McLean-p1-Frontend';

  isLoggedIn: boolean = true;

  constructor(private activatedRoute: ActivatedRoute) {}

  shouldRenderSidebar(): boolean {
    const currentRoute = this.activatedRoute;
    return currentRoute.snapshot.firstChild?.routeConfig?.path === 'sky-condition';
  }

}
