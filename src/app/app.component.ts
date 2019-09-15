import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public isLoggedIn = false;
  title = 'OnlineShopping';
  details: any;
  sub: Subscription;
  WelcomeMessage: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {});
    if (sessionStorage.getItem('LoginDetails') !== null && sessionStorage.getItem('LoginDetails') !== undefined) {
        this.details = JSON.parse(sessionStorage.getItem('LoginDetails'));
        this.WelcomeMessage = 'Welcome ' + this.details.CustomerName;
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  logout() {
    sessionStorage.removeItem('LoginDetails');
    this.router.navigate(['/login']);
  }
}
