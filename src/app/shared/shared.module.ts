import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../components/table/table.component';
import { DynamicFormComponent } from '../components/dynamic-form/dynamic-form.component';
import { ReactiveFormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    TableComponent,DynamicFormComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  exports: [
    TableComponent,DynamicFormComponent
    
  ]
})
export class SharedModule { }
