import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ASSESSMENT_MODULE_DECLARATIONS, AssessmentRoutingModule} from  './Assessment-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    AssessmentRoutingModule
  ],
  declarations: ASSESSMENT_MODULE_DECLARATIONS,
  exports: ASSESSMENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AssessmentModule { }