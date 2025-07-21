import { Component, OnInit } from '@angular/core';
import { HEADER_TABLE } from '../../../consts/confi-table';
import { EventService } from './services/event.service';
import { eventResponse } from '../../../models/events';

@Component({
  selector: 'app-events',
  standalone: false,
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit{

  public constructor(
    private serviceEvent:EventService
  ){

  }
  ngOnInit(): void {
   this.getAllEvent();
  }

  title = 'Eventos de Riesgo Operativo Registrados';
  headerTable = HEADER_TABLE;
  data:eventResponse[] = [];

  getAllEvent(){
     this.serviceEvent.getEventsFiltered().subscribe({
      next: (response) => {
        this.data = response
      }
     })
  }

}
