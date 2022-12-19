import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewUser } from '../../models/authentication/new-user';
import { GeneralResponse } from '../../models/general-response';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private base = `${environment.api.base}`;
  private newUserEndpoint = `${this.base}${environment.api.register.newUser}`;
  
  constructor(private httpClient: HttpClient) { }

  registerNewUser(newUser: NewUser) : Observable<GeneralResponse<string>> {
    return this.httpClient.post<GeneralResponse<string>>(this.newUserEndpoint, newUser)
  }
}
