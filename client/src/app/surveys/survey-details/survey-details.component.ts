import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/models/survey';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.css']
})
export class SurveyDetailsComponent implements OnInit {
  title: string;
  survey: Survey;

  constructor(
    private activatedRoute: ActivatedRoute,
    // service
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.survey = new Survey();

    this.activatedRoute.params.subscribe(params => {
      this.survey._id = params.id;
    });

    if (this.title === 'Edit Survey') {
      // get survey info
    }
  }

  onDetailsPageSubmit(): void {
    /*switch (this.title) {
      case 'Add Service':
        this.Service.addTodo(this.survey).subscribe(data => {
          if (data.success) {
            this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
          } else {
            this.flashMessage.show('Add Survey Failed', {cssClass: 'alert-danger', timeOut: 3000});
          }
          this.router.navigate(['/survey-list/']);
        });
        break;
      case 'Edit Service':
      this.Service.editTodo(this.survey).subscribe(data => {
        if (data.success) {
          this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
        } else {
          this.flashMessage.show('Edit Survey Failed', {cssClass: 'alert-danger', timeOut: 3000});
        }
        this.router.navigate(['/survey-list/']);
      });
    }*/
  }

}
