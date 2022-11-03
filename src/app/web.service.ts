import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';



@Injectable()

export class WebService {

  constructor(private http: HttpClient) { }

  getTask(){
  
    
    return this.http.get('http://localhost:1234/tareas');
  }
}





