import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThreatHomeComponent } from './home/Threat-home.component';
import { ThreatNewComponent } from './new/Threat-new.component';
import { ThreatDetailComponent } from './detail/Threat-detail.component';

const routes: Routes = [
  {path: '', component: ThreatHomeComponent},
  { path: 'new', component: ThreatNewComponent },
  { path: ':id', component: ThreatDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Threat-detail-permissions'
      }
    }
  }
];

export const THREAT_MODULE_DECLARATIONS = [
    ThreatHomeComponent,
    ThreatNewComponent,
    ThreatDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThreatRoutingModule { }