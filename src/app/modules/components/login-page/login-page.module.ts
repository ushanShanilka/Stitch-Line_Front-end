import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './login-page.component';
import { LoginItemPageComponent } from './inner-items/login-item-page/login-item-page.component';
import { SignUpItemPageComponent } from './inner-items/sign-up-item-page/sign-up-item-page.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    LoginPageComponent,
    LoginItemPageComponent,
    SignUpItemPageComponent
  ],
    imports: [
        CommonModule,
        LoginPageRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatProgressBarModule,
        MatSelectModule
    ]
})
export class LoginPageModule { }
