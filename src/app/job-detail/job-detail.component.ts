import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Job } from '../Job';
import {JobService} from '../job.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  @Input() selectedJob: Job;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private location: Location
  ) { }

  getJob(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.jobService.getJob(id)
      .subscribe(hero => this.selectedJob = hero);
    }

  ngOnInit() {
    this.getJob();
  }

  goBack(): void {
    this.location.back();
  }

}
