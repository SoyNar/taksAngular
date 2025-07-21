import { Component, Input } from '@angular/core';
import { headerRow, HeaderTables } from '../../interfaces/config';

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
// declarar lo que puedo recibir
@Input() title = 'aqui va el titulo';
@Input() headerTable: HeaderTables[] = [];
@Input() data:any[] =[]; 

}
