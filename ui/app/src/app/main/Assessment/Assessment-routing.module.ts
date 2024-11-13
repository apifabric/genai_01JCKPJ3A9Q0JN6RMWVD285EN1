import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentHomeComponent } from './home/Assessment-home.component';
import { AssessmentNewComponent } from './new/Assessment-new.component';
import { AssessmentDetailComponent } from './detail/Assessment-detail.component';

const routes: Routes = [
  {path: '', component: AssessmentHomeComponent},
  { path: 'new', component: AssessmentNewComponent },
  { path: ':id', component: AssessmentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Assessment-detail-permissions'
      }
    }
  }
];

export const ASSESSMENT_MODULE_DECLARATIONS = [
    AssessmentHomeComponent,
    AssessmentNewComponent,
    AssessmentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssessmentRoutingModule { }