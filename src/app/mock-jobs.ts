import {Job, JobStatus} from './Job';


export const JOBS: Job[] = [
    {id: 108168324, source: "Maschine 2", destination: "Lager", item:"Aviretta Welle 100g", asap: true, status: JobStatus.todo},
    {id: 10168612, source: "Maschine 3", destination: "Lager", item:"Brown Kraftfilter 186g", asap: true, status: JobStatus.inProgress},
    {id: 15, source: "Lager 2", destination: "Maschine 3",item:"Jass Testliner 3 120g", asap: true, status: JobStatus.inProgress},
    {id: 16, source: "Maschine 27", destination: "Lager", item:"Jass EHZ HArtwelle 130g", asap: true, status: JobStatus.todo},
    {id: 17, source: "Lager", destination: "Lager",item:"Jass Testliner 3 163g", asap: false, status: JobStatus.todo},
    {id: 18, source: "Lager", destination: "Maschine 4",item:"Aviretta Welle 80g", asap: true, status: JobStatus.inProgress},
    {id: 19, source: "Lager", destination: "Maschine 4", item: "EifelLiner STD", asap: false, status: JobStatus.todo},
    {id: 20, source: "Maschine 2", destination: "Lager", item:"Aviretta Welle 80g",  asap: false, status: JobStatus.inProgress},
];


// id : 1,
// source : "Lager",
// destination : "Maschine A",
// asap : false,
// status : JobStatus.inProgress