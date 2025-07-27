import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: 'saro', loadChildren: () => import('./pages/saro/saro.module').then(m => m.SaroModule),

    
   },
   {path:'auth',loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
