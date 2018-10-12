import { Component, OnInit } from '@angular/core';

import { Job } from '../Job';
import {JobService} from '../job.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  openjobs: Job[] = [];

  constructor(private jobservice: JobService) { }

  ngOnInit() {
    this.getOpenJobs();
  }

  getOpenJobs(): void {
    this.jobservice.getOpenJobs()
      .subscribe(jobs => this.openjobs = jobs);
  }

}
