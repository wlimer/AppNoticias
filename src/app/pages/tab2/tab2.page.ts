import { Component, OnInit,ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Article } from '../../interfaces/interfaces';
import { NoticiasService } from '../../services/noticias.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  @ViewChild(IonSegment) segmento=IonSegment;

  categorias=['business','entertainment','general','health','science','sports','technology'];
  noticias: Article[] = [];

  constructor(private noticiasService: NoticiasService) {}
  ngOnInit(){
  //  this.noticiasService.getToHeadLinesCategoria()
  //  .subscribe(resp =>{
  //    this.noticias.push(...resp.articles);

  //  });

  this.cargarNoticias(this.categorias[0]);
 }
//  loadData(event){
//   this.cargarNoticias(event);
// }
  cambioCategoria(event){
   this.noticias=[];
   this.cargarNoticias(event.detail.value);

  }
  cargarNoticias(categoria: string){
   this.noticiasService.getToHeadLinesCategoria(categoria)
    .subscribe(resp =>{

  //  if(resp.articles.length === 0){
  //       event.target.disable=true;
  //       return;
  //   }
     this.noticias.push(...resp.articles);
    // if(event){
    //     event.targe.complete();
    //   }



  });


 }
}
