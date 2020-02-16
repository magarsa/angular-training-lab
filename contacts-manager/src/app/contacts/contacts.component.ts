import { ContactsService } from './contacts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.contactsService.getAgents().subscribe(response => {
      console.log(response);
    })
  }

}
