import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import{ RespuestaTopHeadLines} from '../interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }
  getToHeadLines(){
       const urlNoticias=`https://newsapi.org/v2/top-headlines?country=co&apiKey=36a6a719873c41d7a2ccfca242d38301`;
       return this.http.get<RespuestaTopHeadLines>(urlNoticias);

  }

}
