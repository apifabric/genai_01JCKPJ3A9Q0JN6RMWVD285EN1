import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplianceRequirementHomeComponent } from './home/ComplianceRequirement-home.component';
import { ComplianceRequirementNewComponent } from './new/ComplianceRequirement-new.component';
import { ComplianceRequirementDetailComponent } from './detail/ComplianceRequirement-detail.component';

const routes: Routes = [
  {path: '', component: ComplianceRequirementHomeComponent},
  { path: 'new', component: ComplianceRequirementNewComponent },
  { path: ':id', component: ComplianceRequirementDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ComplianceRequirement-detail-permissions'
      }
    }
  }
];

export const COMPLIANCEREQUIREMENT_MODULE_DECLARATIONS = [
    ComplianceRequirementHomeComponent,
    ComplianceRequirementNewComponent,
    ComplianceRequirementDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplianceRequirementRoutingModule { }