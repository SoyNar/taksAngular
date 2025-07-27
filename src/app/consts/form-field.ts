import { FormConfig, FormField } from "../interfaces/config";

export const  FORM_FIELD:FormField[] = 
[
    {
        name:'email',
        label:'Correo Electronico',
        type:'email',
        required:true,
        placeholder:'Escribe tu correo electronico'},
    {
        name:'password',
        label:'Contraseña',
        type:'password',
        required:true,
        placeholder:'Escribe tu contraseña'
    }

]
export const LOGIN_FORM_CONFIG: FormConfig = {
  title: 'Iniciar Sesión',
  submitButtonText: 'Ingresar',
  fields: FORM_FIELD
};