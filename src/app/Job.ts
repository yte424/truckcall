export class Job{
    id: number;
    source: string;
    destination: string;
    asap : boolean;
    status : JobStatus;
    item: string;
}

export enum  JobStatus {
   todo,
   inProgress,
   done

} 
