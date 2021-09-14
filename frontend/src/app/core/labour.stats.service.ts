import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LabourStats} from "./models/labour.stats.model";


@Injectable()
export class labourStatsService {
  private labourStatsHost = 'http://localhost:6502'
  private labourStatsUrl = '/application/labourstats'
  private apiUrl = `${this.labourStatsHost}${this.labourStatsUrl}`

  constructor(private http: HttpClient) {}

  public getLabourStats() {
    return this.http.get<LabourStats[]>(
      this.apiUrl
    )
  }
}
