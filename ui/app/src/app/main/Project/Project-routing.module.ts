import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectHomeComponent } from './home/Project-home.component';
import { ProjectNewComponent } from './new/Project-new.component';
import { ProjectDetailComponent } from './detail/Project-detail.component';

const routes: Routes = [
  {path: '', component: ProjectHomeComponent},
  { path: 'new', component: ProjectNewComponent },
  { path: ':id', component: ProjectDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Project-detail-permissions'
      }
    }
  },{
    path: ':project_id/Alert', loadChildren: () => import('../Alert/Alert.module').then(m => m.AlertModule),
    data: {
        oPermission: {
            permissionId: 'Alert-detail-permissions'
        }
    }
},{
    path: ':project_id/Control', loadChildren: () => import('../Control/Control.module').then(m => m.ControlModule),
    data: {
        oPermission: {
            permissionId: 'Control-detail-permissions'
        }
    }
},{
    path: ':project_id/Incident', loadChildren: () => import('../Incident/Incident.module').then(m => m.IncidentModule),
    data: {
        oPermission: {
            permissionId: 'Incident-detail-permissions'
        }
    }
},{
    path: ':project_id/Log', loadChildren: () => import('../Log/Log.module').then(m => m.LogModule),
    data: {
        oPermission: {
            permissionId: 'Log-detail-permissions'
        }
    }
},{
    path: ':project_id/Threat', loadChildren: () => import('../Threat/Threat.module').then(m => m.ThreatModule),
    data: {
        oPermission: {
            permissionId: 'Threat-detail-permissions'
        }
    }
},{
    path: ':project_id/Vulnerability', loadChildren: () => import('../Vulnerability/Vulnerability.module').then(m => m.VulnerabilityModule),
    data: {
        oPermission: {
            permissionId: 'Vulnerability-detail-permissions'
        }
    }
}
];

export const PROJECT_MODULE_DECLARATIONS = [
    ProjectHomeComponent,
    ProjectNewComponent,
    ProjectDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }