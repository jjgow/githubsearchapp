import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username: string;
    private client_id = 'c8434d00731c87c5797f';
    private client_secret = '6fd4d7ec40869652e4f500370631bb3811b2e635';

    constructor(private _http: Http){
        console.log('Github service ready');
    }

    getUser(){
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + 
        this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json())
    }
    
    getRepos(){
        return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + 
        this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json())
    }

    updateUser(username:string){
        this.username = username;
    }
}