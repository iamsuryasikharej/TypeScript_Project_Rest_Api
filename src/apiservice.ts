import * as request from 'request'
import {user} from './user'
import { repo } from './repo';
export class apiservice
{

    gituserinfo(userName:string)
    {
        let options=
            {
            headers:{
                'User-Agent':'request',

            },
                json:true

            }
       // let x= request.get("https://api.github.com/users/"+userName,options,(error,res:any,body:any)=>{
       //  let user1=new user(body)
       // console.log(user1)}
       //  )


        //using fetch
        const fetch = require("node-fetch");
      let myJson=fetch("https://api.github.com/users/"+userName,{ method: 'GET',headers:{
            'User-Agent':'request',

        },
        json:true

    }).then(function(response:any){

            return response.json()
        }
    )

        myJson.then((data:any)=>{let user1=new user(data);console.log(user1)})





    }
    getRepos(userName:string)
    {
        const fetch = require("node-fetch");
        let myJson=fetch("https://api.github.com/users/"+userName+"/repos",{ method: 'GET',headers:{
                'User-Agent':'request',

            },
            json:true

        }).then(function(response:any){

                return response.json()
            }
        )

        myJson.then((data:any)=>{
            let x:repo[]
            x=data
            let reparr=new Array(x.length);
            for(let i=0;i<x.length;i++){
            // console.log(x[i].name);
            let temp=new repo(x[i]);
            reparr[i]=temp
            // console.log(temp)
            }
            for (let i=0;i<reparr.length;i++) {
            console.log(reparr[0])}
        })

    }
}

