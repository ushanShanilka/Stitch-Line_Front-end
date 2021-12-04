import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import ProgramDTO from "../../../../dto/ProgramDTO";
import {ProgramService} from "../../../../services/program.service";


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: "ds", weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},

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
    start_date: new FormControl('',Validators.minLength(1)),
    end_date: new FormControl('',Validators.minLength(1))
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
      this.createForm.get('start_date')?.value.toString().trim(),
      this.createForm.get('end_date')?.value.toString().trim(),
    );

    this.programService.create(dto).subscribe(response=>{
      alert("Sup!");
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
