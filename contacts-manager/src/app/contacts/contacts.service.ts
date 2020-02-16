import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ServiceResponse } from '../models/serviceResponse';
import { Agent } from '../models/agent';
import { ErrorResponse } from '../models/errorResponse';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  basePath: string;
  mockAgentList: [];
  response: ServiceResponse<Agent[]> = new ServiceResponse(
    {
      data: [
        new Agent({
          firstName: 'Safal',
          lastName: 'Rana',
          email:'safal-r@emcins.com',
          phone:5156667777,
          active: true
        })
      ],
      error: new ErrorResponse({
        isError: false,
        errors: []
      })
    }
    
  )

  constructor(protected httpClient: HttpClient) { 
    this.basePath = 'http://localhost:4200/'
  }

  public getAgents(): Observable<ServiceResponse<Agent[]>>{
    const fullPath: string = this.basePath.concat('/api/agents');
    // return this.httpClient.get<ServiceResponse<Agent[]>>(fullPath);
    return of(this.response);
  }
}
