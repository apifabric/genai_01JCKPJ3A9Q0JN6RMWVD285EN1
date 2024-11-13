import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {COMPLIANCEREQUIREMENT_MODULE_DECLARATIONS, ComplianceRequirementRoutingModule} from  './ComplianceRequirement-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ComplianceRequirementRoutingModule
  ],
  declarations: COMPLIANCEREQUIREMENT_MODULE_DECLARATIONS,
  exports: COMPLIANCEREQUIREMENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComplianceRequirementModule { }