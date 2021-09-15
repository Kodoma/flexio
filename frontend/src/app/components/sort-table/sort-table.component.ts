import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DeviceDetectorService } from 'ngx-device-detector';

import { LabourStats } from "../../core/models/labour.stats.model";
import { labourStatsService } from "../../core/labour.stats.service";

@Component({
  selector: 'app-sort-table',
  templateUrl: './sort-table.component.html',
  styleUrls: ['./sort-table.component.scss'],
  providers: [labourStatsService]
})
export class SortTableComponent implements OnInit {
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  public isMobile: boolean;
  public dataSource = new MatTableDataSource<any>();
  public displayedColumns: string[] = [
    'name',
    'workerCount',
    'Total',
    'grossPayTotal',
    'payrollAdminTotal',
    'labourCostTotal',
    'rebatesTotal'
  ];

  constructor(
    private labourStatsService: labourStatsService,
    private deviceService: DeviceDetectorService
    ) {
    this.isMobile = this.deviceService.isMobile();
  }

  ngOnInit() {
    this.labourStatsService.getLabourStats()
      .subscribe((resultLabour: LabourStats[]) => {
        this.dataSource = new MatTableDataSource([
          ...resultLabour[0].directContractors,
          ...resultLabour[0].providers
        ]);

        this.dataSource.sortData = (data: any[], sort: MatSort) => {
          return data.sort((a: any, b: any) => {
            const isAsc = sort.direction === 'asc';
            const aTotal = (a.complianceStats) ? a.complianceStats.Total : 0;
            const bTotal = (b.complianceStats) ? b.complianceStats.Total : 0;

            switch (sort.active) {
              case 'name': {
                switch (b.name) {
                  case "Direct Contractors":
                    return 0
                  default:
                    return compare(a.name, b.name, isAsc);
                }
              }
              case 'workerCount': return compare(a.workerCount, b.workerCount, isAsc);
              case 'Total': return compare(aTotal, bTotal, isAsc);
              case 'grossPayTotal': return compare(a.grossPayTotal, b.grossPayTotal, isAsc);
              case 'payrollAdminTotal': return compare(a.payrollAdminTotal, b.payrollAdminTotal, isAsc);
              case 'labourCostTotal': return compare(a.labourCostTotal, b.labourCostTotal, isAsc);
              case 'rebatesTotal': return compare(a.rebatesTotal, b.rebatesTotal, isAsc);
              default: return 0;
            }
          });
        }

        this.dataSource.sort = this.sort;
      })

  }

  /** Gets the total cost of all transactions. */
  getTotalCost(element: string) {
    let sum: number = 0
    this.dataSource.data.map(t => {
      sum += t[element]
    })
    return sum;
  }

  getTotalComplianceScore() {
    let sum: number = 0
    this.dataSource.data.map(t => {
      sum += (t.complianceStats) ? t.complianceStats.Total : 0
    })
    return sum;
  }

  getWorkForcePercentage(workerCount: number, workerTotal: number) {
    return (workerCount * 100) / workerTotal
  }

  getTotalWorkForcePercentage(TotalWorkers: number) {
    let sumPercentage: number = 0
    this.dataSource.data.map(t => {
      sumPercentage += (t.workerCount * 100)/ TotalWorkers
    })
    return sumPercentage;
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
