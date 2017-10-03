const packageInfo = require('../package.json');
const request = require('request-promise');
const queryString = require('query-string');

const DEFAULT_API_BASE = 'https://samplify.io/slacker/api/v1';

class SamSlacker {

    constructor(apiBase) {

        this.token = null;

        if (typeof apiBase === 'undefined') {
            this.apiBase = DEFAULT_API_BASE;
        } else {
            this.apiBase = apiBase;
        }
    }

    setToken(token) {
        this.token = token;
        return this;
    }

    getHeaders() {
        var headers = {
            'User-Agent': 'samslacker-node ' + packageInfo.version,
        };

        if (this.token) {
            headers.Authorization = 'Token ' + this.token;
        }

        return headers;
    }

    packPath(path, queryString) {
        return this.apiBase +
            (path[0] === '/' ? '' : '/') +
            path +
            (path[path.length - 1] === '/' ? '' : '/') +
            (queryString ? `?${queryString}` : '');
    }

    get(path, parameters) {

        if (typeof parameters === 'undefined') {
            parameters = {};
        }

        return request({
            uri: this.packPath(path, queryString.stringify(parameters)),
            method: 'GET',
            json: true,
            headers: this.getHeaders()
        });
    }

    post(path, data) {
        return request({
            uri: this.packPath(path),
            method: 'POST',
            json: true,
            body: data,
            headers: this.getHeaders()
        });
    }

    put(path, data) {
        return request({
            uri: this.packPath(path),
            method: 'PUT',
            json: true,
            body: data,
            headers: this.getHeaders()
        });
    }

    del(path, data) {
        return request({
            uri: this.packPath(path),
            method: 'DELETE',
            json: true,
            body: data,
            headers: this.getHeaders()
        });
    }

    patch(path, data) {
        return request({
            uri: this.packPath(path),
            method: 'PATCH',
            json: true,
            body: data,
            headers: this.getHeaders()
        });
    }
}

module.exports = SamSlacker;
