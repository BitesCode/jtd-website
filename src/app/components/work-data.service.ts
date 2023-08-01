import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class WorkDataService {

  private workUrl = "https://jtdadvertising.in/jtdsitedata";
  figure: any;

  constructor(private http: HttpClient) { }

  getPosts(){
    const url = `${this.workUrl}/wp-json/wp/v2/posts`;
    return this.http.get(url);
  }

  getSinglePost(){
    var id = '';
    const url = `${this.workUrl}/wp-json/wp/v2/posts/${id}`;
    return this.http.get(url);
  }


  
  


}
