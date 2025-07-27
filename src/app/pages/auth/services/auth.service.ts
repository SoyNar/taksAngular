import { Injectable } from "@angular/core";
import { environment } from "../../../environment/environment";
import { HttpClient } from "@angular/common/http";
import { CredentialsLogin, LoginResponse } from "../interfaces/auth";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class AuthService {


    public constructor (
        private http:HttpClient
    ){

    }

    private BASE_URL = `${environment.BASE_URL}`;

    public login(data:CredentialsLogin):Observable<LoginResponse>{
        return this.http.post<LoginResponse>(`${this.BASE_URL}login`,data)

    }
}