import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactListService } from 'src/app/services/contact-list.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent implements OnInit {
  contacts: Contact[];

  constructor(  
    private contactListService: ContactListService,
    private flashMessage: FlashMessagesService,
    private router: Router
    ) { }

  ngOnInit() {
    this.contacts = new Array<Contact>();

  }

  displayMyInfo(): void {
    this.contactListService.getList().subscribe(data => {
      if(data.success) {
        this.contacts = data.contactList;
      } else {
        this.flashMessage.show('User must be logged-in', {cssClass: 'alert-danger', timeOut: 3000});
      }
    });
  }

}
