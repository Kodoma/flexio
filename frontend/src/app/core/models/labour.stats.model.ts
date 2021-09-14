export interface ComplianceStats {
  OpsEmpStatusChecked: number;
  Total: number;
  TaxStatus: number;
  Identification: number;
  RightToWork: number;
  OpsChecked: number;
  Contract: number;
  EmpStatusReview: number;
}

export interface Provider {
  rebatesTotal: number;
  grossPayTotal: number;
  workerCount: number;
  complianceStats: ComplianceStats;
  payrollAdminTotal: number;
  labourCostTotal: number;
  providerId: number;
  name: string;
}

export interface DirectContractor {
  rebatesTotal: number;
  grossPayTotal: number;
  workerCount: number;
  complianceStats?: ComplianceStats;
  payrollAdminTotal: number;
  labourCostTotal: number;
  providerId: number;
  name: string;
}

export interface ComplianceStats2 {
  OpsEmpStatusChecked: number;
  Total: number;
  TaxStatus: number;
  Identification: number;
  RightToWork: number;
  OpsChecked: number;
  Contract: number;
  EmpStatusReview: number;
}

export interface Total {
  rebatesTotal: number;
  grossPayTotal: number;
  workerCount: number;
  complianceStats: ComplianceStats2;
  payrollAdminTotal: number;
  labourCostTotal: number;
  providerId: number;
  name: string;
}

export interface LabourStats {
  providers: Provider[];
  directContractors: DirectContractor[];
  total: Total[];
}
