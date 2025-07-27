import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthRoutingModule } from "./login/auth-routing.module";
import { LoginComponent } from "./login/login.component";
import { DynamicFormComponent } from "../../components/dynamic-form/dynamic-form.component";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule,AuthRoutingModule,SharedModule]
})

export class AuthModule {

}