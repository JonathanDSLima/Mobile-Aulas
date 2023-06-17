import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPage } from './form/form.page';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'form',
    component: FormPage,
  },
  {
    path: 'form/:id',
    component: FormPage,
  },
  {
    path: 'form-detail/:id',
    component: FormPage,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
