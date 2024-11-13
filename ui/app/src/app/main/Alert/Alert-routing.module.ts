import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertHomeComponent } from './home/Alert-home.component';
import { AlertNewComponent } from './new/Alert-new.component';
import { AlertDetailComponent } from './detail/Alert-detail.component';

const routes: Routes = [
  {path: '', component: AlertHomeComponent},
  { path: 'new', component: AlertNewComponent },
  { path: ':id', component: AlertDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Alert-detail-permissions'
      }
    }
  }
];

export const ALERT_MODULE_DECLARATIONS = [
    AlertHomeComponent,
    AlertNewComponent,
    AlertDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertRoutingModule { }