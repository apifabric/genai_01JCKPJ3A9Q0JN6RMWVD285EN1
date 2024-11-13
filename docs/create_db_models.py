# using resolved_model gpt-4o-2024-08-06# created from response, to create create_db_models.sqlite, with test data
#    that is used to create project
# should run without error in manager 
#    if not, check for decimal, indent, or import issues

import decimal
import logging
import sqlalchemy
from sqlalchemy.sql import func 
from logic_bank.logic_bank import Rule
from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, Date, DateTime, Numeric, Boolean, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import relationship
from datetime import date   
from datetime import datetime

logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

Base = declarative_base()  # from system/genai/create_db_models_inserts/create_db_models_prefix.py


class User(Base):
    """description: Stores user account information."""
    __tablename__ = 'user'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String, unique=True)
    email = Column(String, unique=True)
    password = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)


class Project(Base):
    """description: Represents a security compliance project."""
    __tablename__ = 'project'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)
    description = Column(String)
    start_date = Column(Date)
    end_date = Column(Date)


class Control(Base):
    """description: Defines security controls within projects."""
    __tablename__ = 'control'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    project_id = Column(Integer, ForeignKey('project.id'))
    name = Column(String)
    description = Column(String)
    implementation_status = Column(String)


class Assessment(Base):
    """description: Stores assessment results for controls."""
    __tablename__ = 'assessment'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    control_id = Column(Integer, ForeignKey('control.id'))
    date_assessed = Column(DateTime, default=datetime.utcnow)
    result = Column(String)
    comments = Column(String)


class Risk(Base):
    """description: Captures identified risks for controls."""
    __tablename__ = 'risk'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    control_id = Column(Integer, ForeignKey('control.id'))
    description = Column(String)
    likelihood = Column(String)
    impact = Column(String)
    mitigation_strategy = Column(String)


class ComplianceRequirement(Base):
    """description: Stores compliance requirements referenced by controls."""
    __tablename__ = 'compliance_requirement'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    requirement_text = Column(String)
    regulation_source = Column(String)


class Provider(Base):
    """description: Represents security service providers."""
    __tablename__ = 'provider'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)
    contact_info = Column(String)
    service_description = Column(String)


class Threat(Base):
    """description: Details potential threats to projects."""
    __tablename__ = 'threat'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    project_id = Column(Integer, ForeignKey('project.id'))
    description = Column(String)
    threat_level = Column(String)


class Vulnerability(Base):
    """description: Identifies vulnerabilities in projects."""
    __tablename__ = 'vulnerability'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    project_id = Column(Integer, ForeignKey('project.id'))
    description = Column(String)
    severity = Column(String)
    remediation_plan = Column(String)


class Alert(Base):
    """description: Alerts related to compliance checks and assessments."""
    __tablename__ = 'alert'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    project_id = Column(Integer, ForeignKey('project.id'))
    message = Column(String)
    severity_level = Column(String)
    triggered_at = Column(DateTime, default=datetime.utcnow)


class Log(Base):
    """description: Logs related to security events of projects."""
    __tablename__ = 'log'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    project_id = Column(Integer, ForeignKey('project.id'))
    event_details = Column(String)
    logged_at = Column(DateTime, default=datetime.utcnow)


class Incident(Base):
    """description: Records security incidents associated with a project."""
    __tablename__ = 'incident'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    project_id = Column(Integer, ForeignKey('project.id'))
    description = Column(String)
    incident_date = Column(DateTime)
    resolution_status = Column(String)


# ALS/GenAI: Create an SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# ALS/GenAI: Prepare for sample data

from datetime import datetime, date

# Test data for the User class
user1 = User(username='jdoe', email='jdoe@example.com', password='passwd123', created_at=datetime.utcnow())
user2 = User(username='asmith', email='asmith@example.com', password='securepass', created_at=datetime.utcnow())
user3 = User(username='bwilliams', email='bwilliams@example.com', password='mypwd', created_at=datetime.utcnow())
user4 = User(username='cjones', email='cjones@example.com', password='pass234', created_at=datetime.utcnow())

# Test data for the Project class
project1 = Project(name='PCI Compliance', description='PCI DSS Compliance Project', start_date=date(2023, 1, 15), end_date=date(2023, 6, 15))
project2 = Project(name='GDPR Readiness', description='GDPR Act Compliance', start_date=date(2023, 2, 10), end_date=date(2023, 7, 10))
project3 = Project(name='HIPAA Audit', description='Health Insurance Portability Audit', start_date=date(2023, 3, 3), end_date=date(2023, 8, 3))
project4 = Project(name='SOX Review', description='SOX Act Review Process', start_date=date(2023, 4, 4), end_date=date(2023, 9, 4))

# Test data for the Control class
control1 = Control(project_id=1, name='Firewall Rules', description='Ensure firewall rules comply with standards', implementation_status='Completed')
control2 = Control(project_id=2, name='Data Encryption', description='Encrypt personal data at rest', implementation_status='Pending')
control3 = Control(project_id=3, name='Access Logs', description='Monitor access to critical data', implementation_status='In Progress')
control4 = Control(project_id=4, name='User Authentication', description='Implement multi-factor authentication', implementation_status='Implemented')

# Test data for the Assessment class
assessment1 = Assessment(control_id=1, date_assessed=datetime.utcnow(), result='Passed', comments='All rules are effective')
assessment2 = Assessment(control_id=2, date_assessed=datetime.utcnow(), result='Failed', comments='Data is not encrypted')
assessment3 = Assessment(control_id=3, date_assessed=datetime.utcnow(), result='Passed', comments='Logs are comprehensive')
assessment4 = Assessment(control_id=4, date_assessed=datetime.utcnow(), result='Passed', comments='MFA is working correctly')

# Test data for the Risk class
risk1 = Risk(control_id=1, description='High traffic may bypass firewall', likelihood='Medium', impact='High', mitigation_strategy='Regular updates and monitoring')
risk2 = Risk(control_id=2, description='Sensitive data breach possible', likelihood='High', impact='Critical', mitigation_strategy='Encrypt and restrict access')
risk3 = Risk(control_id=3, description='Unauthorized access detected', likelihood='Low', impact='Medium', mitigation_strategy='Routine checks and audits')
risk4 = Risk(control_id=4, description='Phishing attempts increasing', likelihood='Medium', impact='High', mitigation_strategy='Strengthen user awareness program')

# Test data for the ComplianceRequirement class
compliance_req1 = ComplianceRequirement(requirement_text='Encrypt data in transit', regulation_source='PCI DSS')
compliance_req2 = ComplianceRequirement(requirement_text='Anonymize user data', regulation_source='GDPR')
compliance_req3 = ComplianceRequirement(requirement_text='Regular access reviews', regulation_source='HIPAA')
compliance_req4 = ComplianceRequirement(requirement_text='Report financial anomalies quarterly', regulation_source='SOX')

# Test data for the Provider class
provider1 = Provider(name='SecuNet Services', contact_info='contact@secunet.com', service_description='Network Security Solutions')
provider2 = Provider(name='DataGuardians', contact_info='info@dataguardians.com', service_description='Data Protection Services')
provider3 = Provider(name='SecureLane', contact_info='support@securelane.com', service_description='Threat Intelligence Offerings')
provider4 = Provider(name='ShieldTech', contact_info='sales@shieldtech.com', service_description='Comprehensive Security Assessments')

# Test data for the Threat class
threat1 = Threat(project_id=1, description='SQL Injection Vulnerability', threat_level='High')
threat2 = Threat(project_id=2, description='Distributed Denial of Service', threat_level='Critical')
threat3 = Threat(project_id=3, description='Insider Threat', threat_level='Medium')
threat4 = Threat(project_id=4, description='Spoofing Attack', threat_level='Low')

# Test data for the Vulnerability class
vuln1 = Vulnerability(project_id=1, description='Outdated SSL Certificate', severity='High', remediation_plan='Renew certificate')
vuln2 = Vulnerability(project_id=2, description='Unpatched Software', severity='Critical', remediation_plan='Apply patches immediately')
vuln3 = Vulnerability(project_id=3, description='Weak Password Policy', severity='Medium', remediation_plan='Enforce stronger passwords')
vuln4 = Vulnerability(project_id=4, description='Lack of Intrusion Detection', severity='Low', remediation_plan='Implement IDS solution')

# Test data for the Alert class
alert1 = Alert(project_id=1, message='Unauthorized login attempt detected', severity_level='High', triggered_at=datetime.utcnow())
alert2 = Alert(project_id=2, message='Security audit recommended', severity_level='Critical', triggered_at=datetime.utcnow())
alert3 = Alert(project_id=3, message='Potential data leak identified', severity_level='Medium', triggered_at=datetime.utcnow())
alert4 = Alert(project_id=4, message='Network anomaly detected', severity_level='Low', triggered_at=datetime.utcnow())

# Test data for the Log class
log1 = Log(project_id=1, event_details='User authenticated without MFA', logged_at=datetime.utcnow())
log2 = Log(project_id=2, event_details='Access granted to restricted area', logged_at=datetime.utcnow())
log3 = Log(project_id=3, event_details='Potential malware detected', logged_at=datetime.utcnow())
log4 = Log(project_id=4, event_details='Email phishing detected', logged_at=datetime.utcnow())

# Test data for the Incident class
incident1 = Incident(project_id=1, description='Data breach due to leaked credentials', incident_date=datetime(2023, 1, 20), resolution_status='Resolved')
incident2 = Incident(project_id=2, description='Downtime due to DDoS attack', incident_date=datetime(2023, 2, 25), resolution_status='Ongoing')
incident3 = Incident(project_id=3, description='Policy violation reported', incident_date=datetime(2023, 3, 30), resolution_status='Pending Investigation')
incident4 = Incident(project_id=4, description='Fraudulent activity flagged', incident_date=datetime(2023, 4, 18), resolution_status='Resolved')


session.add_all([user1, user2, user3, user4, project1, project2, project3, project4, control1, control2, control3, control4, assessment1, assessment2, assessment3, assessment4, risk1, risk2, risk3, risk4, compliance_req1, compliance_req2, compliance_req3, compliance_req4, provider1, provider2, provider3, provider4, threat1, threat2, threat3, threat4, vuln1, vuln2, vuln3, vuln4, alert1, alert2, alert3, alert4, log1, log2, log3, log4, incident1, incident2, incident3, incident4])
session.commit()
