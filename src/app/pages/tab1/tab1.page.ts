import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
// import { Article } from 'src/app/interfaces/interfaces';
import{ Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  noticias: Article[]=[];

  constructor(private noticiasService: NoticiasService) {}
  ngOnInit(){
    this.cargarNoticias();
  }
   loadData(event){
     this.cargarNoticias(event);
   }
   cargarNoticias(event?){
    this.noticiasService.getToHeadLines()
    .subscribe(resp =>{
      console.log('noticias',resp.articles);
      
      if(resp.articles.length === 0){
         event.target.disable=true;
         return;
      }
      this.noticias.push(...resp.articles);
 
      if(event){
        event.targe.complete();
      }
    });
   }
}

