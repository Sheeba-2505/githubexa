import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './user/user.module';

const routes: Routes = [
  {path:"admin",loadChildren:()=>import("./admin/admin.module").then(adm=>adm.AdminModule)},
  {path:"user",loadChildren:()=>import("./user/user.module").then(use=>use.UserModule)}
];

console.log("App component module");

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
