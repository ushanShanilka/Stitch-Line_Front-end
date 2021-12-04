import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./modules/components/login-page/login-page.module').then(m => m.LoginPageModule)},
  { path: 'program', loadChildren: () => import('./modules/components/program-page/program-page.module').then(m => m.ProgramPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
