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

  constructor(private noticiasServisce: NoticiasService) {}
  ngOnInit(){
   this.noticiasServisce.getToHeadLines()
   .subscribe(resp =>{
     console.log('noticias',resp.articles);
     this.noticias.push(...resp.articles);

   });

 }
}
