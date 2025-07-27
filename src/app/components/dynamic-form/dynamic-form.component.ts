import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormConfig, FormField } from '../../interfaces/config';

@Component({
  selector: 'app-dynamic-form',
  standalone: false,
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent implements OnInit {

  @Input() formFields:FormField[] = []
  @Input() formData: any = {};
  @Input() config!: FormConfig;
  @Input() title = 'Formulario';
  @Input() loadingStatus = false;
  @Output() formSubmit = new EventEmitter<any>
  @Output() formChange = new EventEmitter<any>
  public constructor(
    private fb: FormBuilder
  ){}
  ngOnInit(): void {
    this.createForm();
  }

  dynamicForm!:FormGroup
  isSubmit = false;


  
  initForm(){
    //objeto donde se guardaran las propiedads y su formControl asociado
    const group:Record<string,any> = {};
    this.formFields.forEach(field => {
      group[field.name] = [
        this.formData[field.name] || '',
        field.required ? Validators.required: []
      ];
    });
    this.dynamicForm = this.fb.group(group);
  }

  onSubmit(){
    if(this.dynamicForm.valid){
      this.isSubmit = true;
      this.formSubmit.emit(this.dynamicForm.value)
      //simularemos tiempo de envio
      setTimeout(()=>{
        this.isSubmit = false
      },1000)
    }else{
      //marcar todos los campos como tocados para mostrar errores
      Object.keys(this.dynamicForm.controls).forEach((key)=> {
        this.dynamicForm.get(key)?.markAsTouched()
      })
    }
  }
  
private createForm(){
  const formControls: any = {};
  this.config.fields.forEach((field) => {
   const validator = [];
   if(field.required){
     validator.push(Validators.required);
   }
   if(field.type ==='email'){
     validator.push(Validators.email);
   }

   if(field.validators){
    validator.push(...field.validators);
   }

   formControls[field.name] = [field.value || "", validator];
 
  });
    this.dynamicForm = this.fb.group(formControls);

   //emitir cambios en el formulario
   this.dynamicForm.valueChanges.subscribe((value)=>{
    this.formChange.emit(value);
   });
}

  isFieldInvalid(fielName:string):boolean{
    const field = this.dynamicForm.get(fielName);
    return !! (field && field.invalid &&(field.dirty || field.touched))
  }

  getErrors(fieldName:string):string{
    const field = this.dynamicForm.get(fieldName);
    const message = '';
    if(field?.errors){
      if(field.errors['required']){
        return  "Esta campo es requerido";
      }
      if(field.errors['email']){
        return "Ingresa un email valido";
      }
      if(field.errors['minlength']){
        return `Minimo ${field.errors['minlength'].requiredLength} caracteres`
      }
      if(field.errors['maxlength']){
        return `Maximo ${field.errors['maxlength'].requiredLength} caracteres`
      }
    
    }
      return "";
  }

}
