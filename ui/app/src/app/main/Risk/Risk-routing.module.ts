import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RiskHomeComponent } from './home/Risk-home.component';
import { RiskNewComponent } from './new/Risk-new.component';
import { RiskDetailComponent } from './detail/Risk-detail.component';

const routes: Routes = [
  {path: '', component: RiskHomeComponent},
  { path: 'new', component: RiskNewComponent },
  { path: ':id', component: RiskDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Risk-detail-permissions'
      }
    }
  }
];

export const RISK_MODULE_DECLARATIONS = [
    RiskHomeComponent,
    RiskNewComponent,
    RiskDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiskRoutingModule { }