import { MatSidenav } from '@angular/material/sidenav';
import { ContactsService } from './contacts.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Agent } from '../models/agent';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  close() {
    this.sidenav.close();
  }
  dataSource: any;
  displayedColumns: string[] = ['firstName', 'lastName','email','phone','active'];

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.contactsService.getAgents().subscribe(response => {
      this.dataSource = response.data;
    })
  }

}
