import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import ProgramDTO from "../dto/ProgramDTO";

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http:HttpClient ) {
    this.getALl();
  }

  public create(dto:ProgramDTO):Observable<any>{
    return this.http.post('http://localhost:8080/api/v1/content/programs/create',{
      name:dto.name,
      description:dto.description,
      start_date:dto.start_date,
      end_date:dto.end_date,
    },);
  }

  public getALl(){
    return this.http.get('http://localhost:8080/api/v1/content/programs/all');
  }

  public update(dto: ProgramDTO):Observable<any>{
    return this.http.post('http://localhost:8080/api/v1/content/programs/update', {
      name:dto.name,
      description:dto.description,
      start_date:dto.start_date,
      end_date:dto.end_date,
    });
  }
}
