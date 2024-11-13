import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {INCIDENT_MODULE_DECLARATIONS, IncidentRoutingModule} from  './Incident-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    IncidentRoutingModule
  ],
  declarations: INCIDENT_MODULE_DECLARATIONS,
  exports: INCIDENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IncidentModule { }