"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
var repo_1 = require("./repo");
var apiservice = /** @class */ (function () {
    function apiservice() {
    }
    apiservice.prototype.gituserinfo = function (userName) {
        var options = {
            headers: {
                'User-Agent': 'request',
            },
            json: true
        };
        // let x= request.get("https://api.github.com/users/"+userName,options,(error,res:any,body:any)=>{
        //  let user1=new user(body)
        // console.log(user1)}
        //  )
        //using fetch
        var fetch = require("node-fetch");
        var myJson = fetch("https://api.github.com/users/iamsuryasikharej", { method: 'GET', headers: {
                'User-Agent': 'request',
            },
            json: true
        }).then(function (response) {
            return response.json();
        });
        myJson.then(function (data) { var user1 = new user_1.user(data); console.log(user1); });
    };
    apiservice.prototype.getRepos = function (userName) {
        var fetch = require("node-fetch");
        var myJson = fetch("https://api.github.com/users/" + userName + "/repos", { method: 'GET', headers: {
                'User-Agent': 'request',
            },
            json: true
        }).then(function (response) {
            return response.json();
        });
        myJson.then(function (data) {
            var x;
            x = data;
            var reparr = new Array(x.length);
            for (var i = 0; i < x.length; i++) {
                // console.log(x[i].name);
                var temp = new repo_1.repo(x[i]);
                reparr[i] = temp;
                // console.log(temp)
            }
            for (var i = 0; i < reparr.length; i++) {
                console.log(reparr[0]);
            }
        });
    };
    return apiservice;
}());
exports.apiservice = apiservice;
