import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlHomeComponent } from './home/Control-home.component';
import { ControlNewComponent } from './new/Control-new.component';
import { ControlDetailComponent } from './detail/Control-detail.component';

const routes: Routes = [
  {path: '', component: ControlHomeComponent},
  { path: 'new', component: ControlNewComponent },
  { path: ':id', component: ControlDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Control-detail-permissions'
      }
    }
  },{
    path: ':control_id/Assessment', loadChildren: () => import('../Assessment/Assessment.module').then(m => m.AssessmentModule),
    data: {
        oPermission: {
            permissionId: 'Assessment-detail-permissions'
        }
    }
},{
    path: ':control_id/Risk', loadChildren: () => import('../Risk/Risk.module').then(m => m.RiskModule),
    data: {
        oPermission: {
            permissionId: 'Risk-detail-permissions'
        }
    }
}
];

export const CONTROL_MODULE_DECLARATIONS = [
    ControlHomeComponent,
    ControlNewComponent,
    ControlDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlRoutingModule { }