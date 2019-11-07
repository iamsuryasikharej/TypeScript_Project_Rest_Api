"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var repo = /** @class */ (function () {
    function repo(data) {
        this.name = data.name;
        this.description = data.description;
        this.url = data.url;
        this.size = data.size;
        this.forkcount = data.forks_count;
    }
    return repo;
}());
exports.repo = repo;
