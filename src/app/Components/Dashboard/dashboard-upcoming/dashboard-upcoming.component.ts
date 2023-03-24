import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { DASHBOARD } from 'src/app/bbb';
import { SharedDashboardService } from 'src/app/Services/shared-dashboard.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-dashboard-upcoming',
  templateUrl: './dashboard-upcoming.component.html',
  styleUrls: ['../dashboard-result/dashboard-result.component.css']
})

export class DashboardUpcomingComponent implements OnInit {
  public result: DASHBOARD.Upcoming[]=[];
  public section: number = 3
  public currentDate:Date = new Date();
  public MyData: string;
  public dataNull: boolean = false;
  
  constructor(private sharedService: SharedDashboardService) {}

  ngOnInit(): void {
    this.getMatch();
    this.MyData = formatDate(this.currentDate,'yyyy-MM-dd',"en-US");   
  }
  public getMatch(section: number = 3) {
    this.sharedService.getResult(section)
      .pipe(
        tap()
      )
      .subscribe(res => {
        this.result = res.slice(0,5);
        this.dataNull = !this.result.some(r => r.a_venir === true)
      });
  }

  public handleSection(section) {
    this.getMatch(section);
  }
}
