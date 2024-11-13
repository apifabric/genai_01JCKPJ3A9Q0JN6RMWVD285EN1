import { MenuRootItem } from 'ontimize-web-ngx';

import { AlertCardComponent } from './Alert-card/Alert-card.component';

import { AssessmentCardComponent } from './Assessment-card/Assessment-card.component';

import { ComplianceRequirementCardComponent } from './ComplianceRequirement-card/ComplianceRequirement-card.component';

import { ControlCardComponent } from './Control-card/Control-card.component';

import { IncidentCardComponent } from './Incident-card/Incident-card.component';

import { LogCardComponent } from './Log-card/Log-card.component';

import { ProjectCardComponent } from './Project-card/Project-card.component';

import { ProviderCardComponent } from './Provider-card/Provider-card.component';

import { RiskCardComponent } from './Risk-card/Risk-card.component';

import { ThreatCardComponent } from './Threat-card/Threat-card.component';

import { UserCardComponent } from './User-card/User-card.component';

import { VulnerabilityCardComponent } from './Vulnerability-card/Vulnerability-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Alert', name: 'ALERT', icon: 'view_list', route: '/main/Alert' }
    
        ,{ id: 'Assessment', name: 'ASSESSMENT', icon: 'view_list', route: '/main/Assessment' }
    
        ,{ id: 'ComplianceRequirement', name: 'COMPLIANCEREQUIREMENT', icon: 'view_list', route: '/main/ComplianceRequirement' }
    
        ,{ id: 'Control', name: 'CONTROL', icon: 'view_list', route: '/main/Control' }
    
        ,{ id: 'Incident', name: 'INCIDENT', icon: 'view_list', route: '/main/Incident' }
    
        ,{ id: 'Log', name: 'LOG', icon: 'view_list', route: '/main/Log' }
    
        ,{ id: 'Project', name: 'PROJECT', icon: 'view_list', route: '/main/Project' }
    
        ,{ id: 'Provider', name: 'PROVIDER', icon: 'view_list', route: '/main/Provider' }
    
        ,{ id: 'Risk', name: 'RISK', icon: 'view_list', route: '/main/Risk' }
    
        ,{ id: 'Threat', name: 'THREAT', icon: 'view_list', route: '/main/Threat' }
    
        ,{ id: 'User', name: 'USER', icon: 'view_list', route: '/main/User' }
    
        ,{ id: 'Vulnerability', name: 'VULNERABILITY', icon: 'view_list', route: '/main/Vulnerability' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AlertCardComponent

    ,AssessmentCardComponent

    ,ComplianceRequirementCardComponent

    ,ControlCardComponent

    ,IncidentCardComponent

    ,LogCardComponent

    ,ProjectCardComponent

    ,ProviderCardComponent

    ,RiskCardComponent

    ,ThreatCardComponent

    ,UserCardComponent

    ,VulnerabilityCardComponent

];