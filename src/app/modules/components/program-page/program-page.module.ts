import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramPageRoutingModule } from './program-page-routing.module';
import { ProgramPageComponent } from './program-page.component';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { CreateProgramItemPageComponent } from './inner-items/create-program-item-page/create-program-item-page.component';
import { UpdateProgramItemPageComponent } from './inner-items/update-program-item-page/update-program-item-page.component';
import { SearchProgramItemPageComponent } from './inner-items/search-program-item-page/search-program-item-page.component';
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ProgramPageComponent,
    CreateProgramItemPageComponent,
    UpdateProgramItemPageComponent,
    SearchProgramItemPageComponent
  ],
    imports: [
        CommonModule,
        ProgramPageRoutingModule,
        MatOptionModule,
        MatSelectModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        ReactiveFormsModule
    ]
})
export class ProgramPageModule { }
