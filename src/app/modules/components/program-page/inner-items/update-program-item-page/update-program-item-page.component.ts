import { Component, OnInit } from '@angular/core';
import ProgramDTO from "../../../../dto/ProgramDTO";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProgramService} from "../../../../services/program.service";


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},

];


@Component({
  selector: 'app-update-program-item-page',
  templateUrl: './update-program-item-page.component.html',
  styleUrls: ['./update-program-item-page.component.scss']
})
export class UpdateProgramItemPageComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();

  updateForm = new FormGroup({
    name: new FormControl('',[Validators.minLength(1),Validators.maxLength(20)]),
    description: new FormControl('',Validators.minLength(1)),
    startDate: new FormControl('',Validators.minLength(1)),
    endDate: new FormControl('',Validators.minLength(1))
  })

  constructor(private programService: ProgramService) { }

  ngOnInit(): void {
  }

  update(){
    const dto = new ProgramDTO(
      this.updateForm.get('name')?.value.toString().trim(),
      this.updateForm.get('description')?.value.toString().trim(),
      this.updateForm.get('startDate')?.value.toString().trim(),
      this.updateForm.get('endDate')?.value.toString().trim(),
    );

    this.programService.update(dto).subscribe(response=>{
      alert("Sup!");
    },error => {
      console.log(error)
    })
  }

}
