export interface Config {
}

export interface HeaderTables
{
   
    label:string,

}

export interface headerRow 
{
    [key:string] : string | number

}

export interface FormField {
    name:string,
    value?: any,
    validators?:any[] | null
    type: 'text'|'number'|'email'|'password'|'date'|'textarea'|'select',
    label:string,
    required?:string,
    placeholder?: string,
}

export interface FormConfig {
    fields:FormField[],
    submitButtonText?:string,
    title:string
}