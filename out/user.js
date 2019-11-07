"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = /** @class */ (function () {
    // rep:repo[];
    function user(userResponse) {
        this.login = userResponse.login;
        this.fullname = userResponse.name;
        this.numberrepo = userResponse.public_repos;
        this.followercount = userResponse.followers;
    }
    return user;
}());
exports.user = user;
