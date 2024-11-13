# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, Date, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 13, 2024 21:24:29
# Database: sqlite:////tmp/tmp.QbNqYNEVVT-01JCKPJ3A9Q0JN6RMWVD285EN1/SecurityCompliance/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class ComplianceRequirement(SAFRSBaseX, Base):
    """
    description: Stores compliance requirements referenced by controls.
    """
    __tablename__ = 'compliance_requirement'
    _s_collection_name = 'ComplianceRequirement'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    requirement_text = Column(String)
    regulation_source = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)



class Project(SAFRSBaseX, Base):
    """
    description: Represents a security compliance project.
    """
    __tablename__ = 'project'
    _s_collection_name = 'Project'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    description = Column(String)
    start_date = Column(Date)
    end_date = Column(Date)

    # parent relationships (access parent)

    # child relationships (access children)
    AlertList : Mapped[List["Alert"]] = relationship(back_populates="project")
    ControlList : Mapped[List["Control"]] = relationship(back_populates="project")
    IncidentList : Mapped[List["Incident"]] = relationship(back_populates="project")
    LogList : Mapped[List["Log"]] = relationship(back_populates="project")
    ThreatList : Mapped[List["Threat"]] = relationship(back_populates="project")
    VulnerabilityList : Mapped[List["Vulnerability"]] = relationship(back_populates="project")



class Provider(SAFRSBaseX, Base):
    """
    description: Represents security service providers.
    """
    __tablename__ = 'provider'
    _s_collection_name = 'Provider'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    contact_info = Column(String)
    service_description = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)



class User(SAFRSBaseX, Base):
    """
    description: Stores user account information.
    """
    __tablename__ = 'user'
    _s_collection_name = 'User'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    username = Column(String, unique=True)
    email = Column(String, unique=True)
    password = Column(String)
    created_at = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)



class Alert(SAFRSBaseX, Base):
    """
    description: Alerts related to compliance checks and assessments.
    """
    __tablename__ = 'alert'
    _s_collection_name = 'Alert'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    project_id = Column(ForeignKey('project.id'))
    message = Column(String)
    severity_level = Column(String)
    triggered_at = Column(DateTime)

    # parent relationships (access parent)
    project : Mapped["Project"] = relationship(back_populates=("AlertList"))

    # child relationships (access children)



class Control(SAFRSBaseX, Base):
    """
    description: Defines security controls within projects.
    """
    __tablename__ = 'control'
    _s_collection_name = 'Control'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    project_id = Column(ForeignKey('project.id'))
    name = Column(String)
    description = Column(String)
    implementation_status = Column(String)

    # parent relationships (access parent)
    project : Mapped["Project"] = relationship(back_populates=("ControlList"))

    # child relationships (access children)
    AssessmentList : Mapped[List["Assessment"]] = relationship(back_populates="control")
    RiskList : Mapped[List["Risk"]] = relationship(back_populates="control")



class Incident(SAFRSBaseX, Base):
    """
    description: Records security incidents associated with a project.
    """
    __tablename__ = 'incident'
    _s_collection_name = 'Incident'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    project_id = Column(ForeignKey('project.id'))
    description = Column(String)
    incident_date = Column(DateTime)
    resolution_status = Column(String)

    # parent relationships (access parent)
    project : Mapped["Project"] = relationship(back_populates=("IncidentList"))

    # child relationships (access children)



class Log(SAFRSBaseX, Base):
    """
    description: Logs related to security events of projects.
    """
    __tablename__ = 'log'
    _s_collection_name = 'Log'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    project_id = Column(ForeignKey('project.id'))
    event_details = Column(String)
    logged_at = Column(DateTime)

    # parent relationships (access parent)
    project : Mapped["Project"] = relationship(back_populates=("LogList"))

    # child relationships (access children)



class Threat(SAFRSBaseX, Base):
    """
    description: Details potential threats to projects.
    """
    __tablename__ = 'threat'
    _s_collection_name = 'Threat'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    project_id = Column(ForeignKey('project.id'))
    description = Column(String)
    threat_level = Column(String)

    # parent relationships (access parent)
    project : Mapped["Project"] = relationship(back_populates=("ThreatList"))

    # child relationships (access children)



class Vulnerability(SAFRSBaseX, Base):
    """
    description: Identifies vulnerabilities in projects.
    """
    __tablename__ = 'vulnerability'
    _s_collection_name = 'Vulnerability'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    project_id = Column(ForeignKey('project.id'))
    description = Column(String)
    severity = Column(String)
    remediation_plan = Column(String)

    # parent relationships (access parent)
    project : Mapped["Project"] = relationship(back_populates=("VulnerabilityList"))

    # child relationships (access children)



class Assessment(SAFRSBaseX, Base):
    """
    description: Stores assessment results for controls.
    """
    __tablename__ = 'assessment'
    _s_collection_name = 'Assessment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    control_id = Column(ForeignKey('control.id'))
    date_assessed = Column(DateTime)
    result = Column(String)
    comments = Column(String)

    # parent relationships (access parent)
    control : Mapped["Control"] = relationship(back_populates=("AssessmentList"))

    # child relationships (access children)



class Risk(SAFRSBaseX, Base):
    """
    description: Captures identified risks for controls.
    """
    __tablename__ = 'risk'
    _s_collection_name = 'Risk'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    control_id = Column(ForeignKey('control.id'))
    description = Column(String)
    likelihood = Column(String)
    impact = Column(String)
    mitigation_strategy = Column(String)

    # parent relationships (access parent)
    control : Mapped["Control"] = relationship(back_populates=("RiskList"))

    # child relationships (access children)
