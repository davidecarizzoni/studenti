import { Injectable } from '@angular/core';
import { HttpcommunicationService } from '../http-communication/httpcommunication.service';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  constructor(private http: HttpcommunicationService) { }

  getTable(tname:string){
    return this.http.getCall("/getTable?table="+tname);
  }
  insertCall(body:any,table:string){
    return this.http.postCall("/insert?table="+table,body);
  }
  deleteCall(body:any,table:string){
    return this.http.postCall("/delete?table="+table,body);
  }
  getSingolo(table:string,codice:string){
    return this.http.getCall("/getSingolo?table="+table+"&codice="+codice);
  }

}
