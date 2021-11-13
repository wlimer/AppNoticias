import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import{ RespuestaTopHeadLines} from '../interfaces/interfaces';
// import { NoticiasService } from '../../services/noticias.service';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers= new HttpHeaders({
  'X-Api-Key': apiKey
});




@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  headLinesPages= 0;

  constructor(private http: HttpClient) { }

  
  private ejecutarQuery<T>(query: string){
    query = apiUrl + query;
    console.log('imprimiendo query!!!!!!!!!!!!!!!!',query)
    return this.http.get<T>(query,{headers});

  }


  getToHeadLines(){
   this.headLinesPages++;
   return this.ejecutarQuery<RespuestaTopHeadLines>(`/top-headlines?country=co&page=${this.headLinesPages}`);
      }

  getToHeadLinesCategoria(categoria:string){
    return this.ejecutarQuery<RespuestaTopHeadLines>(`/top-headlines?country=co&category=${categoria}`) ;
  }

}










