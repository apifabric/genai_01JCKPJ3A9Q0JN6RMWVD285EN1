import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderHomeComponent } from './home/Provider-home.component';
import { ProviderNewComponent } from './new/Provider-new.component';
import { ProviderDetailComponent } from './detail/Provider-detail.component';

const routes: Routes = [
  {path: '', component: ProviderHomeComponent},
  { path: 'new', component: ProviderNewComponent },
  { path: ':id', component: ProviderDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Provider-detail-permissions'
      }
    }
  }
];

export const PROVIDER_MODULE_DECLARATIONS = [
    ProviderHomeComponent,
    ProviderNewComponent,
    ProviderDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }