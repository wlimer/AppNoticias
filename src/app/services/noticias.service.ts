import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import{ RespuestaTopHeadLines} from '../interfaces/interfaces';
// import { NoticiasService } from '../../services/noticias.service';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers= new HttpHeaders({
 // eslint-disable-next-line @typescript-eslint/member-ordering
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'X-Api-Key': apiKey

});




@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  headLinesPages= 0;
  categoriaActual = '';
  categoriaPage = 0;

  constructor(private http: HttpClient) { }


private ejecutarQuery<T>(query: string){
    query = apiUrl + query;
    console.log('imprimiendo query!!!!!!!!!!!!!!!!',query);
    return this.http.get<T>(query,{headers});

  }


  // eslint-disable-next-line @typescript-eslint/member-ordering
  getToHeadLines(){
   this.headLinesPages++;
   return this.ejecutarQuery<RespuestaTopHeadLines>(`/top-headlines?country=co&page=${this.headLinesPages}`);
  }


  // eslint-disable-next-line @typescript-eslint/member-ordering
  getToHeadLinesCategoria(categoria: string){
          if(this.categoriaActual === categoria){
              this.categoriaPage++;


          }else{
              this.categoriaPage = 1;
              this.categoriaActual = categoria;
          }


    return this.ejecutarQuery<RespuestaTopHeadLines>(`/top-headlines?country=co&category=${categoria}&page=${this.categoriaPage}`) ;
  }

}










