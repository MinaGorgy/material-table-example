// START IMPORTS
import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from '../models/user.model';
// END IPORTS

@Injectable()
export class UserService {
  private serviceUrl = 'https://jsonplaceholder.typicode.com/photos'; //API URL
  
  constructor(private http: HttpClient) { }
  // ovservable function to get the data from API
  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl);
  }
  
}