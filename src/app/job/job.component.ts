import { Component, OnInit } from '@angular/core';
import { Job } from '../Job';
import {JobService} from '../job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

   jobList :Job[];
   selectedJob: Job;

  constructor(private jobService : JobService) { }
  ngOnInit() {
    this.getJobs();
  }

  getJobs(): void {
    this.jobService.getJobs()
        .subscribe(jobs => this.jobList = jobs);
  }

  onSelect(job: Job): void {
    this.selectedJob = job;
  }
}

