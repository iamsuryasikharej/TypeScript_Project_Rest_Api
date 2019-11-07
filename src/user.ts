import {repo} from "./repo";

export class user
{
    login:string
    fullname:string
    numberrepo:number
    followercount:number
    // rep:repo[];

    constructor(userResponse:any)
    {
        this.login=userResponse.login
        this.fullname=userResponse.name
        this.numberrepo=userResponse.public_repos
        this.followercount=userResponse.followers


    }

}