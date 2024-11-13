import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidentHomeComponent } from './home/Incident-home.component';
import { IncidentNewComponent } from './new/Incident-new.component';
import { IncidentDetailComponent } from './detail/Incident-detail.component';

const routes: Routes = [
  {path: '', component: IncidentHomeComponent},
  { path: 'new', component: IncidentNewComponent },
  { path: ':id', component: IncidentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Incident-detail-permissions'
      }
    }
  }
];

export const INCIDENT_MODULE_DECLARATIONS = [
    IncidentHomeComponent,
    IncidentNewComponent,
    IncidentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidentRoutingModule { }