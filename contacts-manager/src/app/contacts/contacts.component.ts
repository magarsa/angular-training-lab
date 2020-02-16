import { ContactsService } from './contacts.service';
import { Component, OnInit } from '@angular/core';
import { Agent } from '../models/agent';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = ['firstName', 'lastName','email','phone','active'];

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.contactsService.getAgents().subscribe(response => {
      this.dataSource = response.data;
    })
  }

}
