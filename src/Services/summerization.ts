import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Summerization {
  
  //private apiUrl = 'http://localhost:3000/summarize';
  private apiUrl = 'https://summerization-backend-genai-2.onrender.com';

  constructor(private http: HttpClient) {}

  summarizeContent(content: String): Observable<any> {
    return this.http.post(`${this.apiUrl}/summarize`, { content });
  }
  
}
