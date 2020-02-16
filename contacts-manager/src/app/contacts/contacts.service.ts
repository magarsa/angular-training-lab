import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceResponse } from '../models/serviceResponse';
import { Agent } from 'http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  basePath: string;

  constructor(protected httpClient: HttpClient) { 
    this.basePath = 'http://localhost:4200/'
  }

  public getAgents(): Observable<ServiceResponse<Agent[]>>{
    const fullPath: string = this.basePath.concat('/api/agents');
    return this.httpClient.get<ServiceResponse<Agent[]>>(fullPath);
  }
}
