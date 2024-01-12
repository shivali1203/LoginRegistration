import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http : HttpClient) { 
    
  }
  public getData():Observable<any>{

    return this.http.get("http://localhost:5000/user/user");
  }

  public addUser(user: any):Observable<any>{

    return this.http.post("http://localhost:5000/user/user",user);
  }
  public loginUser(user: any):Observable<any>{

    return this.http.post("http://localhost:5000/user/user/login", user);
  }
}
