import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions, Request, RequestMethod, ResponseContentType } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeService {
    constructor(private http: Http) { }
    Post(json, url) {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', `${"Bearer " + localStorage.getItem('token')}`);
        return this.http.post('http://localhost:57936/api/' + url, json,
            {
                headers: headers
            }).toPromise()
            .then((data: Response) => {
                if (data.status === 201)
                    return true
                else if (data.status === 500)
                    return false
            }).catch((err) => {

                console.log(err)
                return err;
            });

    }
    Get(url) {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', `${"Bearer " + localStorage.getItem('token')}`);
        return this.http.get('http://localhost:57936/api/' + url,
            {
                headers: headers
            }).toPromise()
            .then((data: Response) => {
                console.log
                if (data.status === 200)
                    return data.json()

            }).catch((err) => {
                console.log(err)
                return err;
            });

    }
    Put(json, url) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', `${"Bearer " + localStorage.getItem('token')}`);
        return this.http.put('http://localhost:57936/api/' + url, json,
            {
                headers: headers
            }).toPromise()
            .then((data: Response) => {
                if (data.status === 200)
                    return true
                else if (data.status === 500)
                    return false
            }).catch((err) => {
                console.log(err)
                return err;
            });

    }
    Delete(val, url) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', `${"Bearer " + localStorage.getItem('token')}`);
        return this.http.delete(' http://localhost:57936/api/' + url + "/?id=" + val,
            {
                headers: headers
            }, ).toPromise()
            .then((data: Response) => {
                if (data.status === 200)
                    return true
                else if (data.status === 500)
                    return false

            }).catch((err) => {
                console.log(err)
                return err;
            });

    }

}