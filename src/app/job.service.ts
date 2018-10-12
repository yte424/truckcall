  import { Injectable } from '@angular/core';
  import { Observable, of } from 'rxjs';

  import {Job, JobStatus} from './Job';
  import {JOBS} from './mock-jobs';
  

  @Injectable({
    providedIn: 'root'
  })
  export class JobService {

    getJobs(): Observable<Job[]> {
      return of(JOBS);
    }

    getOpenJobs(): Observable<Job[]> {
        return of(JOBS.filter(job => job.status == JobStatus.todo));

    }
    getJob(id: number): Observable<Job>{
      return of(JOBS.find(job => job.id === id));
    }

    constructor() { }
  }
