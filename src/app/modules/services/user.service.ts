import { Injectable } from '@angular/core';
import UserDTO from "../dto/UserDTO";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baserURL = environment.baseUrl;

  constructor(private http:HttpClient) {

  }


  public register(dto:UserDTO):Observable<any>{
    return this.http.post('http://localhost:8080/api/v1/service/register',{
      username:dto.username,
      password:dto.password,
      name:dto.name,
      mobile_Number:dto.mobile_number,
      date_Of_Birth:dto.date_of_birth,
      gender:dto.gender,
      language:dto.language,
    },);
  }

  public login(dto:UserDTO):Observable<any>{
    return this.http.post('http://localhost:8080/api/v1/service/auth',{
      username:dto.username,
      password:dto.password,
    });
  }

}
