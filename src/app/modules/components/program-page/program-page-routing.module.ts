import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramPageComponent } from './program-page.component';
import {CreateProgramItemPageComponent} from "./inner-items/create-program-item-page/create-program-item-page.component";
import {UpdateProgramItemPageComponent} from "./inner-items/update-program-item-page/update-program-item-page.component";
import {SearchProgramItemPageComponent} from "./inner-items/search-program-item-page/search-program-item-page.component";

const routes: Routes = [
    {path: '', component: ProgramPageComponent,children:[
    {path:'', redirectTo:'/program/create', pathMatch:'full'},
    {path:'create', component: CreateProgramItemPageComponent},
    {path:'update', component: UpdateProgramItemPageComponent},
    {path:'search', component: SearchProgramItemPageComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramPageRoutingModule { }
