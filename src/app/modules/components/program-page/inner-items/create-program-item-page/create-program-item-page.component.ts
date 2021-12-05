import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import ProgramDTO from "../../../../dto/ProgramDTO";
import {ProgramService} from "../../../../services/program.service";

export interface PeriodicElement {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
}

let ELEMENT_DATA: PeriodicElement[] = [
  {name:"GDSE", description: "SE", startDate: "2021-12-05", endDate: '2022-12-05'},
];

@Component({
  selector: 'app-create-program-item-page',
  templateUrl: './create-program-item-page.component.html',
  styleUrls: ['./create-program-item-page.component.scss']
})


export class CreateProgramItemPageComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();

  createForm = new FormGroup({
    name: new FormControl('',[Validators.minLength(1),Validators.maxLength(20)]),
    description: new FormControl('',Validators.minLength(1)),
    startDate: new FormControl('',Validators.minLength(1)),
    endDate: new FormControl('',Validators.minLength(1))
  })

  constructor(private programService: ProgramService) {
    this.getAll();
  }

  ngOnInit(): void {
  }

  create(){
    const dto = new ProgramDTO(
      this.createForm.get('name')?.value.toString().trim(),
      this.createForm.get('description')?.value.toString().trim(),
      this.createForm.get('startDate')?.value.toString().trim(),
      this.createForm.get('endDate')?.value.toString().trim(),
    );

    this.programService.create(dto).subscribe(response=>{
      alert("Success !");
    },error => {
      console.log(error)
    })
  }

  public getAll(){
    this.programService.getALl().subscribe(response=>{
      // @ts-ignore
      console.log(response[0].name)
      return response;
    },error => {
      console.log(error)
    })

  }

}
