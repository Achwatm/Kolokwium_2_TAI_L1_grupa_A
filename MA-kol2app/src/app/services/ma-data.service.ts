import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MADataService {
  private url = 'https://kol2tai.herokuapp.com';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.url + '/api/blog/posts');
  }

  getById(id) {
    return this.http.get(this.url + '/api/blog/posts/' + id);
  }
}
