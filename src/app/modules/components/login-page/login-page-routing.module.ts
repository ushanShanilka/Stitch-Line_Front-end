import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page.component';
import {SignUpItemPageComponent} from "./inner-items/sign-up-item-page/sign-up-item-page.component";
import {LoginItemPageComponent} from "./inner-items/login-item-page/login-item-page.component";

const routes: Routes = [
  { path: '', component: LoginPageComponent, children:[
    {path:'',redirectTo:'/login/access', pathMatch:'full'},
    {path:'register', component: SignUpItemPageComponent},
    {path:'access', component: LoginItemPageComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginPageRoutingModule { }
