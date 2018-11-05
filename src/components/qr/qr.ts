import {Component} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";

/**
 * Generated class for the QrComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'qr',
  templateUrl: 'qr.html'
})
export class QrComponent {

  address;

  constructor(public navParam: NavParams,
              public navCtrl: NavController) {
    this.address = navParam.get("address");
  }

  goBack() {
    this.navCtrl.pop();
  }
}
