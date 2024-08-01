import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

private apiUrl = 'http://127.0.0.1:8000/api/tables/';

  constructor( private http:HttpClient) { }

getRecords(): Observable<any[]>{
  return this.http.get<any[]>(this.apiUrl);
}

addRecord(record:any): Observable<any>{
  return this.http.post<any>(this.apiUrl, record);
}  

updateRecord(id:number, record:any): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}${id}/`, record);
}

deleteRecord(id:number): Observable<any>{
  return this.http.delete<any>(`${this.apiUrl}${id}/`);
}

// getRecordById(id:number): Observable<any> {
//   return this.http.get<any>(`${this.apiUrl}${id}/`);
// }
}
