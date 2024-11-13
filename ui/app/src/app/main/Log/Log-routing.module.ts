import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogHomeComponent } from './home/Log-home.component';
import { LogNewComponent } from './new/Log-new.component';
import { LogDetailComponent } from './detail/Log-detail.component';

const routes: Routes = [
  {path: '', component: LogHomeComponent},
  { path: 'new', component: LogNewComponent },
  { path: ':id', component: LogDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Log-detail-permissions'
      }
    }
  }
];

export const LOG_MODULE_DECLARATIONS = [
    LogHomeComponent,
    LogNewComponent,
    LogDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogRoutingModule { }