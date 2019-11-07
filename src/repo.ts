export class repo
{

    name:string;
    description:string;
    url:string;
    size:number;
    forkcount:number;
    constructor(data:any)
    {
        this.name=data.name
        this.description=data.description
        this.url=data.url
        this.size=data.size
        this.forkcount=data.forks_count
    }
}