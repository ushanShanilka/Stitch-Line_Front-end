import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import ProgramDTO from "../dto/ProgramDTO";
import ProgramSearchDTO from "../dto/ProgramSearchDTO";
import application from "@angular-devkit/build-angular/src/babel/presets/application";

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
      startDate:dto.startDate,
      endDate:dto.endDate,
    },);
  }

  public getALl(){
    return this.http.get('http://localhost:8080/api/v1/content/programs/all');
  }

  public update(dto: ProgramDTO):Observable<any>{
    return this.http.post('http://localhost:8080/api/v1/content/programs/update', {
      name:dto.name,
      description:dto.description,
      startDate:dto.startDate,
      endDate:dto.endDate,
    });
  }

  public getProgramDateWise(dto: ProgramSearchDTO):Observable<any>{

    return this.http.get('http://localhost:8080/api/v1/content/programs',{
      // @ts-ignore
      startDate:dto.startDate,
      endDate:dto.endDate
    });
  }
}
