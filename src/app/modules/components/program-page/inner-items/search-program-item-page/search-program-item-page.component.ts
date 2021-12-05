import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProgramService} from "../../../../services/program.service";
import ProgramSearchDTO from "../../../../dto/ProgramSearchDTO";

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
  selector: 'app-search-program-item-page',
  templateUrl: './search-program-item-page.component.html',
  styleUrls: ['./search-program-item-page.component.scss']
})
export class SearchProgramItemPageComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();

  searchForm = new FormGroup({
    name: new FormControl('',[Validators.minLength(1),Validators.maxLength(20)]),
    description: new FormControl('',Validators.minLength(1)),
    startDate: new FormControl('',Validators.minLength(1)),
    endDate: new FormControl('',Validators.minLength(1))
  })

  constructor(private programService:ProgramService) { }

  ngOnInit(): void {
  }

  getProgramDateWise(){
    const dto = new ProgramSearchDTO(
      this.searchForm.get('startDate')?.value.toString().trim(),
      this.searchForm.get('endDate')?.value.toString().trim()
    );

    this.programService.getProgramDateWise(dto).subscribe(response =>{
      alert("Please Check Console !");
    }, error => {
      console.log(error)
      alert(error.name);
    })
  }

}
