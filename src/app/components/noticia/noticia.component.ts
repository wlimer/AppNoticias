import { Component, OnInit,Input } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
 @Input() noticia: Article;
 @Input() indice: number;
  constructor(private iab: InAppBrowser,private actionSheetCtrl: ActionSheetController,private socialSharing: SocialSharing) { }

  ngOnInit() {}

  lanzarNoticias(){
    const browser = this.iab.create(this.noticia.url,'_system');


  }
  async lanzaMenu(){
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [ {
        text: 'Compartir Noticias',
        icon: 'share',
        handler: () => {
         this.socialSharing.share(
            this.noticia.title,
            this.noticia.source.name,
              '',
            this.noticia.url
         );
        }
      }, {
        text: 'Agregar Favorito',
        icon: 'star-outline',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
