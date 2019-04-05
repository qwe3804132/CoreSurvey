import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent extends BasePageComponent implements OnInit {

  constructor(
    route: ActivatedRoute,
    private authService: AuthService
    ) {
    super(route);
  }

  ngOnInit() {
  }

  isLoggedIn(): boolean {
    return this.authService.loggedIn();
  }

}
