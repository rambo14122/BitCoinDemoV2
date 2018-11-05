import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

/*
  Generated class for the RequestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequestProvider {

  constructor(public http: HttpClient) {
  }

  sendPostRequest(payload): Promise<any> {
    let data = JSON.stringify(payload);
    return new Promise((resolve, reject) => {
      this.http.post("some url", data)
        .toPromise()
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject();
        });
    });
  }
}
