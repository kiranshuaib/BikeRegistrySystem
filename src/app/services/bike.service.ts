import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getBikes(){
    return this.http.get('/server/api/v1/bikes');
  }

  // tslint:disable-next-line:typedef
  getBike(id: number){
    return this.http.get('/server/api/v1/bikes/' + id);
  }

  // tslint:disable-next-line:typedef
  createBikeRegistration(bike){
    let body = JSON.stringify(bike);
    return this.http.post('/server/api/v1/bikes', body, httpOptions);
  }


}
