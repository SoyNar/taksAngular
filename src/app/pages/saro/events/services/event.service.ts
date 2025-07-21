import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment/environment';
import { eventResponse } from '../../../../models/events';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }
private BASE_URL = environment.BASE_URL;
  getEventsFiltered():Observable<eventResponse[]>{
     return this.http.get<eventResponse[]>(`${this.BASE_URL}event`)
  }
}
