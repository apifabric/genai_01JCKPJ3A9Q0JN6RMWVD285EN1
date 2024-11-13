import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Alert', loadChildren: () => import('./Alert/Alert.module').then(m => m.AlertModule) },
    
        { path: 'Assessment', loadChildren: () => import('./Assessment/Assessment.module').then(m => m.AssessmentModule) },
    
        { path: 'ComplianceRequirement', loadChildren: () => import('./ComplianceRequirement/ComplianceRequirement.module').then(m => m.ComplianceRequirementModule) },
    
        { path: 'Control', loadChildren: () => import('./Control/Control.module').then(m => m.ControlModule) },
    
        { path: 'Incident', loadChildren: () => import('./Incident/Incident.module').then(m => m.IncidentModule) },
    
        { path: 'Log', loadChildren: () => import('./Log/Log.module').then(m => m.LogModule) },
    
        { path: 'Project', loadChildren: () => import('./Project/Project.module').then(m => m.ProjectModule) },
    
        { path: 'Provider', loadChildren: () => import('./Provider/Provider.module').then(m => m.ProviderModule) },
    
        { path: 'Risk', loadChildren: () => import('./Risk/Risk.module').then(m => m.RiskModule) },
    
        { path: 'Threat', loadChildren: () => import('./Threat/Threat.module').then(m => m.ThreatModule) },
    
        { path: 'User', loadChildren: () => import('./User/User.module').then(m => m.UserModule) },
    
        { path: 'Vulnerability', loadChildren: () => import('./Vulnerability/Vulnerability.module').then(m => m.VulnerabilityModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }