import {Injectable} from '@angular/core';
import {ToastController} from "ionic-angular";

/*
  Generated class for the SettingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SettingProvider {

  constructor(public toast: ToastController) {
    console.log('Hello SettingProvider Provider');
  }

  presentToast(content) {
    let toast = this.toast.create({
      message: content,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

}
