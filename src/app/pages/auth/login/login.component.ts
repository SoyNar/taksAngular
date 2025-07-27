import { Component } from '@angular/core';
import { FORM_FIELD, LOGIN_FORM_CONFIG } from '../../../consts/form-field';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public constructor(
    private authService: AuthService,
    private router:Router
  ){
    
  }

  public formField = FORM_FIELD;
  public loginConfig = LOGIN_FORM_CONFIG;

  onLogin(event:{email:string,password:string}){

    const data = event;
    this.authService.login(data).subscribe({
      next: (response) => {
        
        console.log("Auteticado de manera exitosa",response);
        this.router.navigate(['/saro'])
      }, error: (err) => {
        console.error("error al autenticar el usuario", err);
      }

    })
  }

}
