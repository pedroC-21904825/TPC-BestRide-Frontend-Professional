import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TourManagementPage } from './tour-management.page';

const routes: Routes = [
  {
    path: '',
    component: TourManagementPage,
  },
  {
    path: 'create-tour',
    loadChildren: () =>
      import('./create-tour/create-tour.module').then(
        (m) => m.CreateTourPageModule
      ),
  },
  {
    path: 'create-tour',
    loadChildren: () =>
      import('./create-tour/create-tour.module').then(
        (m) => m.CreateTourPageModule
      ),
  },
  {
    path: 'create-tour-point',
    loadChildren: () =>
      import('./create-tour-point/create-tour-point.module').then(
        (m) => m.CreateTourPointPageModule
      ),
  },
  {
    path: 'finish-tour',
    loadChildren: () => import('./finish-tour/finish-tour.module').then( m => m.FinishTourPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TourManagementPageRoutingModule {}
