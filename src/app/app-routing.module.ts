import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginGuard } from './guards/login.guard';
import { LoginResolver } from './resolver/login.resolver';

const routes: Routes = [
  {
    path: '',
    component: ContactFormComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    resolve: {
      login: LoginResolver
    },
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
